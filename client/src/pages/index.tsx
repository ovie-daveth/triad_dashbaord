import ToggleTheme from '@/components/toggletheme';
import { Button } from '@/components/ui/button';
import { PanelsTopLeft, GitBranch, ArrowRightIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          
          <nav className="ml-auto flex items-center gap-2">
           
            <ToggleTheme />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Triad, Learn and practice past question with fun
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              The easiest way to practice for all your exams ranging from primary to post graduate exams.
              We also practice for Gmat, GRE etc
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link to="/dashboard">
                  Dashboard
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button disabled variant="outline">
                {/* <Link
                  to=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Link> */}
                Demo
              </Button>
            </div>
          </section>
          <div className="w-full flex justify-center relative">
            <img
              src="/demo-light-min.png"
              width={1080}
              height={608}
              alt="demo"
              className="border rounded-xl shadow-sm dark:hidden"
            />
            <img
              src="/demo-dark-min.png"
              width={1080}
              height={608}
              alt="demo-dark"
              className="border border-zinc-600 rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
            />
            <img
              src="/demo-mobile-light-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="border rounded-xl absolute bottom-0 right-0 hidden lg:block dark:hidden"
            />
            <img
              src="/demo-mobile-dark-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="border border-zinc-600 rounded-xl absolute bottom-0 right-0 hidden dark:lg:block"
            />
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Built on top of{" "}
            <Link
              to="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </Link>
            . The source code is available on{" "}
            <Link
              to="https://github.com/salimi-my/shadcn-ui-sidebar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage