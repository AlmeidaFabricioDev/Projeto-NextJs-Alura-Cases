import NextLink from "next/link";

export default function index({children, href}) {
    return (
        <NextLink href={href} passHref >
             {children}
        </NextLink>
    )
}
