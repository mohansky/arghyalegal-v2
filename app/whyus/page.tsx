import Container from "@/components/styled-comps/container";
import WhyusList from "@/components/whyus-list";
import React from "react";

export default function WhyUs() {
  return (
    <main>
      <Container width="marginxy">
        <div className="lg:w-5/6">
          <WhyusList />
        </div>
      </Container>
    </main>
  );
}
