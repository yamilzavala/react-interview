import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                providesTags: (results,_e,user) => {
                    //return [{type: 'Album', id: user.id}]
                    const tags = results.map(album => {
                        return {type: 'Album', id: album.id}
                    })
                    tags.push({type: 'UsersAlbums', id: user.id})
                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags:  (_r,_e,user) => {
                    return [{type: 'UsersAlbums', id: user.id}]
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        body: {
                            id: faker.id,
                            userId: user?.id,
                            title: faker.commerce.productName()
                        },
                        method: 'POST'
                    }
                }
            }),
            removeAlbum: builder.mutation({
                invalidatesTags: (_r, _e, album) => {
                    return [{type: 'Album', id: album.id}]
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE',
                    }
                }
            })
        };
    }
})

export const {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} = albumsApi;
export {albumsApi};