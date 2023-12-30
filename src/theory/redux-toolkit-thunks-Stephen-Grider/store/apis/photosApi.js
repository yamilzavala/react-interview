import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: (results, error, album) => {
                    const tags = results.map(photo => {
                        return {type: 'Photo',id: photo.id}
                    })
                    tags.push({type: 'AlbumPhoto', id: album.id})
                    return tags;
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET'
                    }
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (results, error, album) => {
                    return [{type: 'AlbumPhoto', id: album.id}]
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        body: {
                            id: faker.id,
                            url: faker.image.abstract(150,150, true),
                            albumId: album.id
                        },
                        method: 'POST',
                    }
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (results, error, photo) => {
                    return [{type: 'Photo', id: photo.id}]
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE'
                    }
                }   
            })
        }
    }
})

export const {useFetchPhotosQuery,useAddPhotoMutation,useRemovePhotoMutation} = photosApi;
export {photosApi};