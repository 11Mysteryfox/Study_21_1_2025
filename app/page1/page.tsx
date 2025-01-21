import Image from "next/image"
import Link from "next/link"
export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-center">Page1</h1>

            <Image src ="/1.jpg" width={300} height={300} alt="cat"/>

           <h1 className="text-3xl text-blue-400">66162110479-3</h1>

            <ul>
            <li className="border-2 hover:bg-red-400"><Link href="\page1">Go to Page 1</Link></li>
            <li className="border-2 hover:bg-red-400"><Link href="\page2">Go to Page 2</Link></li>
            <li className="border-2 hover:bg-red-400"><Link href="\page3">Go to Page 3</Link></li>
            
            </ul>
        </div>
    )
}