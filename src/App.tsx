import { Home, Mail, Phone } from 'lucide-solid'
import { JSXElement } from 'solid-js'

function Contact(props: { title: string, information: string, children: JSXElement }) {
  return (
    <div class='grid grid-rows-2 grid-cols-4 hover:bg-gray-200 p-4 min-w-full'>
      <div class='row-span-2 col-span-1 flex items-center'> {props.children} </div>
      <h2 class='col-span-3'> {props.title} </h2>
      <h3 class='col-span-3'> {props.information} </h3>
    </div>
  )
}

function Skill(props: { type: string, skills: string[] }) {
  const skillList = props.skills.join(', ')
  return (
    <div class='hover:bg-gray-200 p-4 min-w-full'>
      <h2> {props.type} </h2>
      <h3> {skillList} </h3>
    </div>
  )
}

function Profile(props: { imageUrl: string, firstname: string, lastname: string, info: string }) {
  return (
    <section class='flex flex-col items-center p-4 gap-4'>
      <img src={props.imageUrl} class='rounded-full h-36 w-36' />
      <h1> {props.firstname + ' ' + props.lastname} </h1>
      <h2> {props.info}</h2>
    </section>
  )
}

function Education(props: { degree: string, graduation: string, school: string, location: string }) {
  return (
    <section class='flex flex-col gap-1'>
      <h2> {props.degree} </h2>
      <h3 class='text-gray-500'> {props.graduation} </h3>
      <h3> {props.school} - {props.location} </h3>
    </section>
  )
}

function ProfileSection(props: { children: JSXElement }) {
  return (
    <article class='bg-white text-black rounded-lg shadow-lg col-span-1 row-span-4 p-4'>
      {props.children}
    </article>
  )
}

function ContactSection(props: { children: JSXElement }) {
  return (
    <section class='flex flex-col items-center p-4 gap-4'>
      {props.children}
    </section>
  )
}

function SkillSection(props: { children: JSXElement }) {
  return (
    <section class='flex flex-col items-center p-4 gap-4'>
      <h1> Skills </h1>
      {props.children}
    </section>
  )
}

function EducationSection(props: { children: JSXElement }) {
  return (
    <div class='gap-4 flex flex-col bg-white text-black rounded-lg shadow-lg col-span-2 p-4'>
      <h1 class='font-bold pl-0 p-2 text-xl'> Education </h1>
      {props.children}
    </div>
  )
}

function WorkSection(props: { children: JSXElement }) {
  return (
    <div class='gap-4 flex flex-col bg-white text-black rounded-lg shadow-lg col-span-2 p-4'>
      <h1 class='font-bold pl-0 p-2 text-xl'> Work Experience </h1>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <>
      <main class='bg-gray-100 min-h-dvh grid grid-cols-3 gap-4 p-4'>
        <ProfileSection>
          <Profile
            imageUrl='https://user-images.githubusercontent.com/42506001/221354918-01bf0e89-48be-4df7-85bb-cdf5d0136f2a.png'
            firstname='Jason'
            lastname='Simmonds'
            info="Jason's Portfolio"
          />

          <hr />

          <ContactSection>
            <Contact title='Phone Number' information='781-000-0000'>
              <Phone />
            </Contact>
            <Contact title='Email' information='example@umass.edu'>
              <Mail />
            </Contact>
            <Contact title='Address' information='639 North Pleasant Street'>
              <Home />
            </Contact>
          </ContactSection>

          <hr />

          <SkillSection>
            <Skill type='Programming Languages' skills={['Typescript', 'JavaScript', 'PHP']} />
            <Skill type='Scripting Languages' skills={['Bash', 'ZShell']} />
            <Skill type='Operating Systems' skills={['Mac OS', 'Linux']} />
            <Skill type='Writing Tools' skills={['LaTeX', 'Microsoft Word']} />
          </SkillSection>
        </ProfileSection>

        <EducationSection>
          <Education degree='M.S. in Computer Science' graduation='Anticipated May 2026' school='University of Massachussets Amherst' location='Amherst, MA' />

          <hr />

          <Education degree='B.S. in Computer Science' graduation='May 2024' school='University of Massachussets Amherst' location='Amherst, MA' />
        </EducationSection>

        <WorkSection>
          <p> Data </p>
        </WorkSection>
      </main>
    </>
  )
}

export default App
