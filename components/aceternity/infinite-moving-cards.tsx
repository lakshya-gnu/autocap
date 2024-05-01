"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { LinkBtn } from "../link-btn";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";

export const InfiniteMovingCards = ({
    testimonials,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    testimonials: {
        review: string;
        author: string;
        url: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "20s"
                );
            } else if (speed === "normal") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "40s"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "150s"
                );
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {testimonials.map((item, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-neutral-700 px-8 py-6 md:w-[450px]"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--neutral-800), var(--neutral-900)",
                        }}
                        key={item.author}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] font-kanit"
                            ></div>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: item.review,
                                }}
                                className=" relative z-20 text-lg leading-[1.6] text-gray-100 font-light font-kanit"
                            ></span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="font-kanit text-base leading-[1.6] text-gray-400 font-normal">
                                        {item.author}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
