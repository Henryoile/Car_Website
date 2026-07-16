import Image from "next/image";

import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main
      className="overflow-hidden">
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter
                title="fuel"
                containerStyles="bg-primary-blue text-white rounded-full text-sm"
              />
              <CustomFilter
                title="year"
                containerStyles="bg-white text-primary-blue rounded-full text-sm border border-primary-blue"
              />
            </div>
          </div>

        </div>
    </main>
  )
}
