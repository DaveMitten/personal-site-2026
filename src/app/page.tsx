import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <article>
          <h1 className="text-4xl font-bold">Hi, I'm Dave,</h1>

          <br />
          {/* build things can be a link to the github projects */}
          <p>I'm a developer and I like to <a className="underline" href="https://github.com/DaveMitten" target="_blank" rel="noopener noreferrer">build things</a>.</p>
          <p>I have been building with code for over 9 years now.</p>
          <br />
          <p>I like writing <strong>good</strong>, <strong>clean</strong> code. <em>Easy-to-read</em> code.
            <br />Code that is <em>easy to understand</em> and <em>easy to maintain</em>. </p>
          <p>I like good processes. Reducing the pains that come with the writing of said code.</p>
          <br />
          <p>I have worked mostly in startups. Small 2 person teams up to 100+ people teams.
            <br />I am working currently at <strong>Sainsbury's</strong> as a <strong>Senior Engineer</strong>.</p>
          <br />
          <p>I am currently based in <strong>London, UK</strong>.</p>
          <br />
          <p>You can read my <a className="underline" href="https://theneurotechnologist.substack.com" target="_blank" rel="noopener noreferrer">writing</a>, or <a className="underline" href="https://bsky.app/profile/neurotechnologist.bsky.social" target="_blank" rel="noopener noreferrer">follow me online</a>.

          </p>
          <p>If you want to chat, <a className="underline" href="https://www.linkedin.com/in/davidjamesmitten/" target="_blank" rel="noopener noreferrer">reach me here</a>.</p>
          <br />
          <p>I also cook, eat, watch docs on physics and the state of the world. Music used to be my full time world. </p>
        </article>
      </main>
    </div >
  );
}
