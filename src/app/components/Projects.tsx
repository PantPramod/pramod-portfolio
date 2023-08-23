import React from 'react'
import Card from './Card'
import Heading from './Heading'

const Projects = () => {
    return (
        <div>
            <Heading>Projects</Heading>
            <div className=' flex justify-between w-[90%] mx-auto gap-y-8 flex-wrap'>
                <Card
                    title='Lets Assess'
                    technologies={["React JS", "Node JS", "Typescript", "Express JS", "MongoDB"]}
                    img="/letsassess.png"
                    link='https://letsassess-by-pramod.netlify.app'
                />

                <Card
                    title='Periapparel'
                    technologies={["React JS", "Node JS", "Express JS", "MongoDB", "Firebase"]}
                    img="/periapparel1.png"
                    link='https://periapparel.com'
                />

                <Card
                    title='Cosedge'
                    technologies={["Next JS", "React JS", "Typescript", "Framer motion"]}
                    img="/cosedge.png"
                    link='https://cosedge.com'
                />

                <Card
                    title='opnr.app'
                    technologies={["React JS", "Node JS", "Express JS", "MongoDB", "Firebase"]}
                    img="/opnr.png"
                    link='https://www.appopener.com/'
                />

                <Card
                    title='thedreadlifter'
                    technologies={["React JS", "Node JS", "Express JS", "MongoDB", "Firebase"]}
                    img="/dreadlifter.png"
                    link='https://www.thedreadlifter.com/'
                />

                <Card
                    title='Task Manager'
                    technologies={["Next JS 13.4"]}
                    img="/taskmanager.png"
                    link='https://task-manager-by-pramod.vercel.app/'
                />

                <Card
                    title='ecommerce'
                    technologies={["Next JS 13.4", "Node JS", "Express JS", "firebase", "Typescript"]}
                    img="/ecommerce.png"
                    link='https://task-manager-by-pramod.vercel.app/'
                />

                <Card
                    title='Component Library'
                    technologies={["Next JS 13.4", "Next Auth"]}
                    img="/library.png"
                    link='https://component-library-orcin.vercel.app/'
                />

                <Card
                    title='Resume'
                    technologies={["React JS"]}
                    img="/portfolio.png"
                    link='https://pramodpant.netlify.app/'
                />
                <Card
                    title="Spread Cards"
                    technologies={["React JS", "Typescript", "MongoDB", "Node JS", "Express JS"]}
                    img="/spreadcard.png"
                    link='https://spreadcard.netlify.app'
                />



            </div>
        </div>
    )
}

export default Projects
