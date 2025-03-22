const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1>Hi, I&apos;m Harika</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>
              Currently residing in Seattle, Washington
              <span className='ml-1.5'>🇺🇸</span>
            </li>
          </ul>
        </div>
      </div>

      <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300'>
        Proficient software Engineer with deep expertise in backend development
        and practical experience in front-end integration. Specialized in
        architecting robust backend systems and enhancing their interaction with
        front-end platforms to create seamless, scalable web services.
        Proficient in leveraging cloud technologies; I excel in collaborative
        settings, driving the development of high-performance solutions that
        streamline and strengthen business operations.
      </p>
    </section>
  );
};

export default Introduction;
