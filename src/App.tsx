import { Home, Mail, Phone } from 'lucide-solid'
import { ContactSection, ProfileSection, SkillSection, EducationSection, WorkSection } from './layouts'
import { Profile, Skill, Contact, Education, Work } from './components'


function App() {
  return (
    <>
      <main class='bg-gray-100 min-h-dvh lg:grid lg:grid-cols-3 lg:px-12 flex flex-col gap-4 p-4'>
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
            <Contact title='Email' information='example@umass.edu' copy>
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
          <Work title='Software Developer' organization='Build UMass' time='Feb 2024 - May 2024'>
            <p> Built Software Projects for Build UMass </p>
          </Work>

          <hr />

          <Work title='Software Researcher' organization='University of Massachussets Amherst' time='Sep 2023 - Dec 2023'>
            <p> Did AI Research at the University of Massachusetts Amherst </p>
          </Work>
        </WorkSection>
      </main>
    </>
  )
}

export default App
