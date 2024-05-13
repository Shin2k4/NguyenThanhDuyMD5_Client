import React from 'react'

export default function ErrCom({ url }: {
    url: string
}) {
    window.localStorage.href = url;
    return (
        <div></div>
    )
}
