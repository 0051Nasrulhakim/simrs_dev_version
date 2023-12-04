import dynamic from "next/dynamic"

const DynamicHeader = dynamic(()=> import('./page'), {
    loading: () => <>Loading...</>
})

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
        <DynamicHeader/>
        </>
    )
}