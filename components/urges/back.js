import Link from "next/link";

export const BackButton = () => {
    return (
        <Link href="/urges">
            <a className="p-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-xl text-center">&lt; Back</h3>
            </a>
        </Link>
    )
}