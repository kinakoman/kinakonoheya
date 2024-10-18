import Image from 'next/image'
export default function ImageSet({ image, alt, height, width }) {
    return (
        <>
            <div style={{ height: `${height}px`, width: `${width}px`, position: "relative", margin: "10px auto 0 auto" }}>
                <Image src={image} alt={alt} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
        </>
    )
}