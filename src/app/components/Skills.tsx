import React from 'react'
import ProgressBar from './ProgressBar'

const Skills = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h2 className="text-3xl font-bold  pt-20 text-center mt-20 mb-10 uppercase">Skills</h2>

            <div className='flex justify-between gap-y-10 w-full flex-wrap'>

          

                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="display-4 iconify iconify--mdi" width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.56l4.07-1.13l.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58l-2.22.6l-2.22-.6l-.14-1.66h-2l.29 3.19L12 17.56M4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8L4.07 3Z"></path></svg><figcaption>HTML5</figcaption></figure>
                </div>

                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="display-4 iconify iconify--ion" width="5em" height="5em" viewBox="0 0 512 512"><path fill="currentColor" d="m64 32l35 403.22L255.77 480L413 435.15L448 32Zm290.68 334.9L256.07 395l-98.46-28.24l-6.75-77.76h48.26l3.43 39.56l53.59 15.16l.13.28l53.47-14.85l5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58Z"></path></svg><figcaption>CSS3</figcaption></figure>
                </div>
                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="display-4 iconify iconify--fa6-brands" width="5em" height="5em" viewBox="0 0 448 512"><path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5c-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6z"></path></svg><figcaption>JavaScript</figcaption></figure>
                </div>
                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.29"><defs></defs><title>tailwind-css</title><path className="cls-1" d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"/></svg>
                        <figcaption>Tailwind CSS</figcaption></figure>
                </div>
                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="display-4 iconify iconify--mdi" width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"></path></svg><figcaption>React</figcaption>
                    </figure>
                </div>
                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="display-4 iconify iconify--file-icons mx-auto" width="5em" height="5em" viewBox="0 0 512 512"><path fill="currentColor" d="M128.392 245.844c-2 25.182 20.123 43.73 35.221 43.73c15.119-.705 74.002-50.326 74.002-50.326c27.694-35.025 27.814-50.599 27.814-62.84c-2.31-54.043-100.77 28.27-137.037 69.436zm243.565-20.918c13.365-28.286-4.616-59.703-43.728-32.108c-31.08 19.754-71.317 60.392-90.574 76.3c-8.932 18.041 13.71 67.551 49.59 41.41c42.41-30.812 73.38-59.785 84.712-85.602zm36.4-171.112L416.97 0H512v98.234l-34.827.416l-41.935 142.034c2.61 50.128-22.81 50.944-26.057 73.945c-8.161 57.81-72.81 105.112-97.527 105.112c-16.485-.478-28.536-19.372-32.584-35.836c46.48-51.41 108.984-91.811 108.984-91.811c3.903-27.037-4.675-35.645 24.173-58.684l27.528-144.738c-23.51-15.525-34.48-15.284-31.398-34.858zm-185.487 239.7c24.102 48.564 58.927 49.83 112.92-11.999c1.283 5.716 2.688 11.705.11 26.085C226.064 405.839 122.614 501.45 91.125 512H0v-24.44c14.82-20.552 136.448-120.871 222.87-194.046zm162.328 94.03c-4.945 42.036-43.27 78.82-94.482 124.456H128.412L265.24 396.745c23.62 53.755 65.574 45.968 119.959-9.201zM193.26 292.13L0 456.854v-106.87L113.73 257.4c6.084 34.461 43.355 64.806 79.53 34.732z"></path></svg><figcaption>Styled Components</figcaption></figure>
                </div>
                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="display-4 iconify iconify--akar-icons" width="5em" height="5em" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#iconifyReact0)"><path fill="currentColor" d="M16.63 16.563c.885-.092 1.557-.863 1.527-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.947.03-1.68.832-1.65 1.788c.032.463.215.863.49 1.14c-1.039 2.067-2.627 3.577-5.01 4.841c-1.618.864-3.298 1.172-4.977.956c-1.375-.185-2.444-.802-3.116-1.819c-.977-1.51-1.068-3.145-.244-4.779c.58-1.171 1.497-2.035 2.077-2.466a16.987 16.987 0 0 1-.397-1.573C-.871 14.436-.412 18.814.93 20.88c1.008 1.542 3.054 2.498 5.315 2.498a7.45 7.45 0 0 0 1.832-.216c3.91-.77 6.872-3.114 8.552-6.598Zm5.375-3.823c-2.321-2.744-5.742-4.255-9.651-4.255h-.489a1.677 1.677 0 0 0-1.496-.925h-.062c-.946.031-1.68.833-1.649 1.789c.03.925.794 1.664 1.71 1.664h.062a1.721 1.721 0 0 0 1.496-1.048h.55c2.321 0 4.52.678 6.505 2.004c1.527 1.018 2.627 2.343 3.237 3.947c.52 1.294.49 2.558-.06 3.638c-.856 1.634-2.291 2.528-4.185 2.528c-1.221 0-2.382-.37-2.993-.648a18.07 18.07 0 0 1-1.374 1.11c1.313.617 2.657.956 3.94.956c2.932 0 5.1-1.634 5.925-3.268c.885-1.788.824-4.871-1.466-7.492ZM6.49 17.087c.03.925.794 1.665 1.71 1.665h.061c.947-.03 1.68-.832 1.65-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062a.53.53 0 0 0-.214.03c-1.252-2.096-1.771-4.377-1.588-6.844c.122-1.85.733-3.453 1.802-4.779c.886-1.14 2.596-1.695 3.757-1.726c3.237-.062 4.611 4.008 4.703 5.642c.397.092 1.069.308 1.527.462C17.759 3.09 14.706.5 11.773.5C9.025.5 6.49 2.504 5.482 5.464c-1.405 3.946-.489 7.738 1.222 10.729c-.153.216-.245.555-.214.894Z"></path></g><defs><clipPath id="iconifyReact0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></g></svg><figcaption>Redux</figcaption></figure>
                </div>
                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="display-4 iconify iconify--bi" width="5em" height="5em" viewBox="0 0 16 16"><path fill="currentColor" d="M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"></path></svg><figcaption>Git</figcaption>
                    </figure>
                </div>
                <div className='w-[33%]  flex jusify-center items-center'>
                    <figure className='mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="display-4 iconify iconify--fa6-brands" width="5em" height="5em" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8c0-5.4.2-33 .2-55.3c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6c-14.1 0-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 13.9.2 36.5.2 40.6c0 4.3-3 9.5-11.5 8c-66-22.1-112.2-84.9-112.2-158.3c0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7.6 3.9 1.9c.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4c-2.2.2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3c-1.9-.4-3.2-1.9-2.8-3.2c.4-1.3 2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3.6c1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5.6c1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3.7 1.9 1.8 1.5 2.6z"></path></svg><figcaption>GitHub</figcaption></figure>
                </div>
            </div>
            {/* <div className='w-[90%] mx-auto pb-10'>
        <div className='mt-4'></div>
        <ProgressBar title="HTML" percent={90} />

        <div className='mt-4'></div>
        <ProgressBar title="CSS" percent={70} />
        <div className='mt-4'></div>
        <ProgressBar title="JS" percent={60} />
        <div className='mt-4'></div>
        <ProgressBar title="React" percent={75} />
        <div className='mt-4'></div>
        <ProgressBar title="Next JS" percent={60} />
        <div className='mt-4'></div>
        <ProgressBar title="Node JS" percent={60} />

        <div className='mt-4'></div>
        <ProgressBar title="Express JS" percent={60} />

        <div className='mt-4'></div>
        <ProgressBar title="MongoDB" percent={55} />

        <div className='mt-4'></div>
        <ProgressBar title="MySQL" percent={50} />



      </div> */}
        </div>
    )
}

export default Skills
