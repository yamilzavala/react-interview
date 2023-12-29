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
            })
        };
    }
})

export const {useFetchAlbumsQuery, useAddAlbumMutation} = albumsApi;
export {albumsApi};