import { ReactNode } from "react";
import { GetStartedDialog } from "@/components/GetStarted/GetStartedDialog";
import { Link, Outlet } from "react-router-dom";
import { UserMenu } from "@/components/UserMenu";
import { Toaster } from "@/components/ui/toaster";


export default function Layout() {

    return (
        <div className="flex h-screen w-full flex-col">
            <header className="sticky top-0 z-10 flex min-h-20 border-b bg-background/80 backdrop-blur">
                <nav className="container w-full justify-between flex flex-row items-center gap-6">
                    <div className="flex items-center gap-6 md:gap-10">
                        <Link to="/">
                            <h1 className="text-2xl font-semibold">Convex Blog</h1>
                        </Link>
                        <div className="flex items-center gap-4 text-sm">
                            <GetStartedDialog>
                                <button className="text-muted-foreground transition-colors hover:text-foreground">
                                    Help
                                </button>
                            </GetStartedDialog>
                            <a
                                href="https://docs.convex.dev"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                target="_blank"
                            >
                                Docs
                            </a>
                        </div>
                    </div>
                    <UserMenu />
                </nav>
            </header>
            <main className="flex grow flex-col overflow-scroll">
                <Outlet />
                <Toaster />
            </main>
            <footer className="border-t hidden sm:block">
                <div className="container py-4 text-sm leading-loose">
                    Built with ❤️ at{" "}
                    <FooterLink href="https://www.convex.dev/">Convex</FooterLink>.
                    Powered by Convex,{" "}
                    <FooterLink href="https://vitejs.dev">Vite</FooterLink>,{" "}
                    <FooterLink href="https://react.dev/">React</FooterLink> and{" "}
                    <FooterLink href="https://ui.shadcn.com/">shadcn/ui</FooterLink>.
                </div>
            </footer>
        </div>
    );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <a
            href={href}
            className="underline underline-offset-4 hover:no-underline"
            target="_blank"
        >
            {children}
        </a>
    );
}
