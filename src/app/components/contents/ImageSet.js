import Image from 'next/image'
export default function ImageSet({ image, alt, height, width }) {
    return (
        <>
            <div style={{ height: `${height}px`, width: `min(${width}px, 100%)`, position: "relative", margin: "30px auto 0 0" }}>
                <Image src={image} alt={alt} fill style={{ objectFit: 'contain', objectPosition: 'top' }} placeholder="blur" />
            </div>
        </>
    )
}