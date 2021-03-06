import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import MainCard from '../../components/MainCard/MainCard'
import SecondCard from '../../components/MainCard/SecondCard'

export default function Artist({ a }: { a: string }) {
    return (
        <Layout>
            <div className="grid grid-cols-12 grid-rows-6 gap-4 min-h-screen  text-white bg-primary p-6">
                <div className="col-span-6 bg-permissiontoDance rounded-2xl shadow-2xl">
                    <MainCard />
                </div>
                <div className="col-span-6 bg-butter rounded-2xl shadow-2xl ">
                    <SecondCard />
                </div>

            </div>
        </Layout>
    )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            a: "b"
        }
    }

}

