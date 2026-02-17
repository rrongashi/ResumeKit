export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  html: string;
}

export const resumeTemplates: ResumeTemplate[] = [
  {
    id: 'modern-professional',
    name: 'Modern Professional',
    description: 'Clean, two-column layout with bold headings.',
    html: `
      <main style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 720px; margin: 0 auto; padding: 24px 28px; color: #0f172a; background: #ffffff;">
        <header style="border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 10px;">
          <h1 style="font-size: 22px; letter-spacing: 0.08em; text-transform: uppercase; margin: 0;">John Doe</h1>
          <p style="margin: 3px 0 0; font-size: 12px; color: #475569;">Senior Software Engineer</p>
          <p style="margin: 2px 0 0; font-size: 11px; color: #64748b;">
            San Francisco, CA · (555) 555‑5555 · john.doe@email.com
          </p>
          <p style="margin: 2px 0 0; font-size: 11px; color: #64748b;">
            linkedin.com/in/johndoe · github.com/johndoe
          </p>
        </header>

        <section style="margin-bottom: 10px;">
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 0 0 4px;">
            Summary
          </h2>
          <p style="margin: 0; font-size: 11px; color: #4b5563;">
            Senior engineer with 8+ years of experience building reliable, user‑focused web applications.
            Specializes in modern JavaScript, scalable frontends, and collaborating with cross‑functional
            teams to ship measurable improvements to product metrics.
          </p>
        </section>

        <section style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
          <div>
            <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 0 0 6px;">
              Experience
            </h2>

            <article style="margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="font-size: 12px; font-weight: 600; margin: 0;">Senior Software Engineer · Acme Corp</h3>
                <span style="font-size: 11px; color: #6b7280;">2019 – Present</span>
              </div>
              <p style="margin: 2px 0 0; font-size: 10px; color: #6b7280;">San Francisco, CA</p>
              <ul style="margin: 2px 0 0 16px; padding: 0; font-size: 11px; color: #4b5563;">
                <li>Led development of a multi‑tenant analytics dashboard in React and Next.js.</li>
                <li>Improved page load performance by 30% through bundle optimization and caching.</li>
                <li>Mentored a team of 5 engineers and formalized onboarding and review processes.</li>
              </ul>
            </article>

            <article style="margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="font-size: 12px; font-weight: 600; margin: 0;">Software Engineer · Tech Solutions</h3>
                <span style="font-size: 11px; color: #6b7280;">2016 – 2019</span>
              </div>
              <p style="margin: 2px 0 0; font-size: 10px; color: #6b7280;">Remote</p>
              <ul style="margin: 2px 0 0 16px; padding: 0; font-size: 11px; color: #4b5563;">
                <li>Implemented new product features across a micro‑frontend architecture.</li>
                <li>Collaborated with designers to iterate quickly on UI and improve usability.</li>
                <li>Introduced automated testing for critical flows, reducing regressions.</li>
              </ul>
            </article>

            <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 6px 0 4px;">
              Education
            </h2>
            <p style="margin: 0; font-size: 11px; color: #4b5563;">
              B.S. in Computer Science · University of Technology
            </p>

            <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 8px 0 4px;">
              Key Projects
            </h2>
            <ul style="margin: 0 0 0 16px; padding: 0; font-size: 11px; color: #4b5563;">
              <li>SaaS analytics dashboard used by 5k+ monthly active users.</li>
              <li>Internal design system adopted across 3 product teams.</li>
            </ul>
          </div>

          <aside>
            <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 0 0 6px;">
              Skills
            </h2>
            <ul style="margin: 0 0 6px 16px; padding: 0; font-size: 11px; color: #4b5563;">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
            </ul>

            <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 6px 0 4px;">
              Technologies
            </h2>
            <p style="margin: 0; font-size: 11px; color: #4b5563;">
              REST & GraphQL APIs · SQL & NoSQL databases · CI/CD · Testing (Jest, Playwright)
            </p>

            <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 8px 0 4px;">
              Strengths
            </h2>
            <p style="margin: 0; font-size: 11px; color: #4b5563;">
              System design · Code quality · Mentorship · Cross‑functional collaboration
            </p>

            <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 8px 0 4px;">
              Languages
            </h2>
            <p style="margin: 0; font-size: 11px; color: #4b5563;">
              English (fluent) · Spanish (conversational)
            </p>
          </aside>
        </section>
      </main>
    `
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Single-column, traditional resume layout.',
    html: `
      <main style="font-family: Georgia, 'Times New Roman', serif; max-width: 660px; margin: 0 auto; padding: 24px 28px; color: #111827; background: #ffffff;">
        <header style="text-align: center; margin-bottom: 16px;">
          <h1 style="font-size: 22px; margin: 0;">Jane Smith</h1>
          <p style="margin: 4px 0 0; font-size: 12px; color: #4b5563;">
            jane.smith@email.com · (555) 555‑5555 · New York, NY
          </p>
        </header>

        <section style="margin-bottom: 10px;">
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 3px; margin: 0 0 6px;">
            Professional Summary
          </h2>
          <p style="margin: 0; font-size: 11px; color: #374151;">
            Project manager with 7+ years of experience coordinating cross‑functional teams, managing
            budgets, and delivering complex initiatives on time for public and private sector clients.
          </p>
        </section>

        <section style="margin-bottom: 12px;">
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 3px; margin: 0 0 6px;">
            Experience
          </h2>
          <article style="margin-bottom: 10px;">
            <p style="margin: 0; font-size: 11px; font-weight: 600;">
              Project Manager · Global Corp
              <span style="float: right; font-weight: normal; color: #4b5563;">2018 – Present</span>
            </p>
            <p style="margin: 2px 0 0; font-size: 10px; color: #6b7280;">New York, NY</p>
            <ul style="margin: 2px 0 0 16px; padding: 0; font-size: 11px; color: #374151;">
              <li>Managed cross‑functional teams to deliver projects on time and under budget.</li>
              <li>Coordinated communication between stakeholders and technical teams.</li>
            </ul>
          </article>
          <article>
            <p style="margin: 0; font-size: 11px; font-weight: 600;">
              Assistant Project Manager · City Org
              <span style="float: right; font-weight: normal; color: #4b5563;">2014 – 2018</span>
            </p>
            <p style="margin: 2px 0 0; font-size: 10px; color: #6b7280;">New York, NY</p>
            <ul style="margin: 2px 0 0 16px; padding: 0; font-size: 11px; color: #374151;">
              <li>Supported planning, scheduling, and reporting for municipal projects.</li>
              <li>Maintained documentation and improved internal communication workflows.</li>
            </ul>
          </article>
        </section>

        <section>
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 3px; margin: 0 0 6px;">
            Education
          </h2>
          <p style="margin: 0 0 4px; font-size: 11px; color: #374151;">
            B.A. in Business Administration, City University
          </p>
          <p style="margin: 0 0 4px; font-size: 11px; color: #374151;">
            Certificate in Agile Project Management, Online Institute
          </p>
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 3px; margin: 10px 0 6px;">
            Skills
          </h2>
          <p style="margin: 0; font-size: 11px; color: #374151;">
            Project planning · Stakeholder communication · Risk management · Budget tracking ·
            Process improvement
          </p>
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 3px; margin: 10px 0 6px;">
            Highlights
          </h2>
          <ul style="margin: 0 0 0 16px; padding: 0; font-size: 11px; color: #374151;">
            <li>Delivered 15+ projects with on‑time completion.</li>
            <li>Recognized for clear communication and stakeholder alignment.</li>
          </ul>
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 3px; margin: 10px 0 6px;">
            Certifications
          </h2>
          <p style="margin: 0 0 4px; font-size: 11px; color: #374151;">
            PMP® (Project Management Professional) · Scrum Master (CSM)
          </p>
        </section>
      </main>
    `
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Colorful header with emphasis on projects.',
    html: `
      <main style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 760px; margin: 0 auto; background: #f9fafb;">
        <header style="background: linear-gradient(90deg, #4f46e5, #ec4899); color: white; padding: 20px 26px;">
          <h1 style="font-size: 22px; margin: 0 0 2px;">Alex Creative</h1>
          <p style="margin: 0; font-size: 11px;">
            Designer & Frontend Developer · alex.creative@example.com · (555) 555‑5555
          </p>
        </header>

        <section style="padding: 18px 26px 22px;">
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 0 0 10px;">
            Highlight Projects
          </h2>
          <article style="background: #ffffff; border-radius: 10px; padding: 12px 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); margin-bottom: 10px;">
            <h3 style="font-size: 12px; font-weight: 600; margin: 0 0 2px;">Portfolio Website Redesign</h3>
            <p style="margin: 0 0 2px; font-size: 11px; color: #4b5563;">
              A bold, colorful personal brand site built with Next.js and Tailwind CSS.
            </p>
            <p style="margin: 0; font-size: 10px; color: #6b7280;">Improved engagement by 40% and time on page by 25%.</p>
          </article>

          <article style="background: #ffffff; border-radius: 10px; padding: 12px 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); margin-bottom: 10px;">
            <h3 style="font-size: 12px; font-weight: 600; margin: 0 0 2px;">Mobile App UI Kit</h3>
            <p style="margin: 0 0 2px; font-size: 11px; color: #4b5563;">
              Designed a reusable UI kit for a cross‑platform mobile app, focusing on accessibility and motion.
            </p>
            <p style="margin: 0; font-size: 10px; color: #6b7280;">Documented patterns and components in an interactive Storybook.</p>
          </article>

          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 12px 0 8px;">
            Skills
          </h2>
          <p style="margin: 0; font-size: 11px; color: #4b5563;">
            Branding · UI/UX design · Prototyping · Frontend development (React, Next.js) · Motion design
          </p>
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 10px 0 6px;">
            Tools
          </h2>
          <p style="margin: 0; font-size: 11px; color: #4b5563;">
            Figma · Adobe XD · Illustrator · After Effects · Git · Storybook
          </p>
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 10px 0 6px;">
            About
          </h2>
          <p style="margin: 0; font-size: 11px; color: #4b5563;">
            Blends visual storytelling with clean, accessible interfaces, focusing on products that feel
            playful yet easy to use.
          </p>
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 10px 0 6px;">
            Experience
          </h2>
          <p style="margin: 0; font-size: 11px; color: #4b5563;">
            Senior Product Designer · Studio XYZ
            <span style="float: right; font-size: 10px; color: #6b7280;">2019 – Present · Remote</span>
          </p>
          <ul style="clear: both; margin: 4px 0 0 16px; padding: 0; font-size: 11px; color: #4b5563;">
            <li>Leads end‑to‑end design for web and mobile experiences.</li>
            <li>Partners with engineering to ship polished, performant UI.</li>
          </ul>
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 10px 0 6px;">
            Education
          </h2>
          <p style="margin: 0; font-size: 11px; color: #4b5563;">
            B.Des. in Visual Communication · School of Design
          </p>
        </section>
      </main>
    `
  }
];
