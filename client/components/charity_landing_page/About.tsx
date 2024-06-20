// TODO: the background image is flowing above the scroll bar on the side of the window because it's div is currently set to 'fixed.' bg-fixed can remain as it is; the initial fixed should probably be updated at some stage... non-urgent.
// TODO: Add Contents Component that allows users to quickly jump to each section of this page, fixed to the top-right side of the text-based section.

export default function About() {
  return (
    <div className="border-box relative h-full w-5/6 overflow-y-scroll border-4 border-sky-400">
      <div className="border-box fixed h-1/2 w-full bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed object-cover"></div>
      <div className="border-box fixed h-1/2 w-full bg-gradient-to-b from-transparent from-80% to-white"></div>
      <div className="absolute left-0 top-[45%] mx-[5%] h-auto w-[90%] rounded-2xl bg-slate-100 p-6 shadow-lg">
        <h1 className="mb-4 text-5xl font-medium">About charity-name</h1>
        <h2 className="mb-2 mt-6 text-3xl">Our Vision</h2>
        <p>
          <em>*insert vision statement here (with passed-props)*</em>
        </p>
        <h2 className="mb-2 mt-6 text-3xl">Our Mission</h2>
        <p>
          <em>*insert mission statement here (with passed-props)*</em>
        </p>
        <h2 className="mb-2 mt-6 text-3xl">Our Values</h2>
        <div className="my-4 flex justify-center p-4">
          <span className="mx-auto text-xl">Effort</span>|
          <span className="mx-auto text-xl">Integrity</span>|
          <span className="mx-auto text-xl">Kindness</span>|
          <span className="mx-auto text-xl">Generosity</span>|
          <span className="mx-auto text-xl">Humility</span>
        </div>
        <h2 className="mb-2 mt-6 text-3xl">Our Services</h2>
        <p>
          <em>
            *insert a summary statement re: the services each charity provides,
            here (with passed-props)*
          </em>
        </p>
        <h2 className="mb-2 mt-6 text-3xl">Our Story</h2>
        <p className="pb-2">
          This page provides charities with an opportunity to tell their story
          and showcase some impressive statistics; chances are, this will also
          be the landing page for their charity whenever they share their url
          (e.g. https://www.coordinary.org/takatimuhouse)
        </p>
        <p className="pb-2">
          This section will likely be multiple paragraphs long, and for that
          reason we will need to be clever regarding how we will store this
          information, so it may be passed down within props, based on the
          charity name within the URL params...
        </p>
        <p className="pb-2">
          Here is another paragraph for the sake of demonstrating the scroll
          effect; the content was not quite long enough for this to be evident.
        </p>
        <h3 className="my-6 text-center text-2xl font-semibold">
          <em>Emphatic Statistic or Quote goes here!</em>
        </h3>
        <p className="pb-2">
          And here is the beginning of one more paragraph, to nicely frame the
          emphatic statement, above.
        </p>
        <div className="pb-2 mx-auto w-1/2 border-4 border-pink-300 m-8">
          TODO: create a CTA <em>component</em> that prompts our potential donors to
          follow this charity and sign up to their mailing list!!! It could
          begin with something along these lines: to follow our story as to
          continues to unfold, subscribe to our emailing list here and follow us
          on Coordinary!
        </div>
      </div>
    </div>
  )
}
