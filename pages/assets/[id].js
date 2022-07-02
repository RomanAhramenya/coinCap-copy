import Router,{ useRouter } from "next/router"
import { useEffect, useState } from "react";
import { Layout } from "../../app/components/layout/Layout";

export default function Assets(){

    const router = useRouter()
 
        return (
        <Layout>
           <h1 style={{marginTop:'10em'}}> {router.query.id}</h1> 
        </Layout>
        
    )
}
