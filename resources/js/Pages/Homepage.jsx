import React from 'react';
import { Link, Head } from '@inertiajs/react'; 
export default function Homepage(props) {
    console.log(props)
    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-neutral-800 bg-slate-50'>
            <Head title={props.title}/>
            {props.news ? props.news.map((data, i) => {
                return (
                    <div key={i} className='min-w-[16rem] min-h-[16rem] p-4 m-2 bg-white text-black shadow-md rounded-md flex flex-col justify-between'>
                        <p className='text-2xl'>{data.title}</p>
                        <p className='text-sm'>{data.description}</p>
                        <p>{data.category}</p>
                        <p>{data.author}</p>
                    </div>
                )
            }) : <p>Saat Ini Belum Ada Berita Tersedia</p>}
        </div>
    )
}
