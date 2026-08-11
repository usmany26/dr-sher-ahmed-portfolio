"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { patientReviews } from "@/lib/site-data";

export function CustomerReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => trackRef.current?.scrollBy({ left: direction * trackRef.current.clientWidth * .55, behavior: "smooth" });
  return <div className="review-carousel">
    <div className="customer-review-grid" ref={trackRef}>{patientReviews.map(review => <article key={review.name}><div className="customer-review-head"><span>{review.name.charAt(0)}</span><div><b>{review.name}</b><small>{review.treatment}</small></div></div><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>{review.review}</p></article>)}</div>
    <div className="carousel-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous patient review"><ArrowLeft /></button><button type="button" onClick={() => move(1)} aria-label="Next patient review"><ArrowRight /></button></div>
  </div>;
}
