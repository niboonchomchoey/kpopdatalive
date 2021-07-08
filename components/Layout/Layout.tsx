import React, { ReactNode } from 'react'




export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen ">
            <nav>

            </nav>
            <main className="flex-1">
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}
