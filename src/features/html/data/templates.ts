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
      <main style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; width: 100%; box-sizing: border-box; padding: 28px 32px; color: #0f172a; background: #ffffff;">
        <header style="border-bottom: 2px solid #0f172a; padding-bottom: 10px; margin-bottom: 14px;">
          <h1 style="font-size: 28px; letter-spacing: 0.08em; text-transform: uppercase; margin: 0;">John Doe</h1>
          <p style="margin: 4px 0 0; font-size: 15px; color: #475569;">Senior Software Engineer</p>
          <p style="margin: 3px 0 0; font-size: 14px; color: #64748b;">
            San Francisco, CA · (555) 555‑5555 · john.doe@email.com
          </p>
          <p style="margin: 3px 0 0; font-size: 14px; color: #64748b;">
            linkedin.com/in/johndoe · github.com/johndoe
          </p>
        </header>

        <section style="margin-bottom: 14px;">
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 0 0 6px;">
            Summary
          </h2>
          <p style="margin: 0; font-size: 14px; color: #4b5563;">
            Senior engineer with 8+ years of experience building reliable, user‑focused web applications.
            Specializes in modern JavaScript, scalable frontends, and collaborating with cross‑functional
            teams to ship measurable improvements to product metrics. Passionate about clean architecture
            and mentoring junior developers.
          </p>
        </section>

        <section style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
          <div>
            <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 0 0 8px;">
              Experience
            </h2>

            <article style="margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="font-size: 15px; font-weight: 600; margin: 0;">Senior Software Engineer · Acme Corp</h3>
                <span style="font-size: 14px; color: #6b7280;">2019 – Present</span>
              </div>
              <p style="margin: 3px 0 0; font-size: 12px; color: #6b7280;">San Francisco, CA</p>
              <ul style="margin: 3px 0 0 20px; padding: 0; font-size: 14px; color: #4b5563;">
                <li>Led development of a multi‑tenant analytics dashboard in React and Next.js.</li>
                <li>Improved page load performance by 30% through bundle optimization and caching.</li>
                <li>Mentored a team of 5 engineers and formalized onboarding and review processes.</li>
                <li>Drove adoption of TypeScript and established shared component libraries across products.</li>
                <li>Championed accessibility (WCAG 2.1) and keyboard navigation across core product flows.</li>
              </ul>
            </article>

            <article style="margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="font-size: 15px; font-weight: 600; margin: 0;">Software Engineer · Tech Solutions</h3>
                <span style="font-size: 14px; color: #6b7280;">2016 – 2019</span>
              </div>
              <p style="margin: 3px 0 0; font-size: 12px; color: #6b7280;">Remote</p>
              <ul style="margin: 3px 0 0 20px; padding: 0; font-size: 14px; color: #4b5563;">
                <li>Implemented new product features across a micro‑frontend architecture.</li>
                <li>Collaborated with designers to iterate quickly on UI and improve usability.</li>
                <li>Introduced automated testing for critical flows, reducing regressions.</li>
                <li>Built internal CLI tools and scripts to streamline deployment and local development.</li>
              </ul>
            </article>

            <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 8px 0 6px;">
              Education
            </h2>
            <p style="margin: 0; font-size: 14px; color: #4b5563;">
              B.S. in Computer Science · University of Technology · Minor in Mathematics
            </p>

            <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 12px 0 6px;">
              Key Projects
            </h2>
            <ul style="margin: 0 0 0 20px; padding: 0; font-size: 14px; color: #4b5563;">
              <li>SaaS analytics dashboard used by 5k+ monthly active users.</li>
              <li>Internal design system adopted across 3 product teams.</li>
              <li>Open‑source contributor to React ecosystem libraries.</li>
              <li>Side project: real‑time collaboration tool for distributed teams (Node + WebSockets).</li>
            </ul>
          </div>

          <aside>
            <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 0 0 8px;">
              Skills
            </h2>
            <ul style="margin: 0 0 8px 20px; padding: 0; font-size: 14px; color: #4b5563;">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>Python / Shell scripting</li>
            </ul>

            <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 8px 0 6px;">
              Technologies
            </h2>
            <p style="margin: 0; font-size: 14px; color: #4b5563;">
              REST & GraphQL APIs · SQL & NoSQL databases · CI/CD · Docker · Testing (Jest, Playwright)
            </p>

            <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 12px 0 6px;">
              Strengths
            </h2>
            <p style="margin: 0; font-size: 14px; color: #4b5563;">
              System design · Code quality · Mentorship · Cross‑functional collaboration
            </p>

            <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 12px 0 6px;">
              Languages
            </h2>
            <p style="margin: 0; font-size: 14px; color: #4b5563;">
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
      <main style="font-family: Georgia, 'Times New Roman', serif; width: 100%; box-sizing: border-box; padding: 28px 32px; color: #111827; background: #ffffff;">
        <header style="text-align: center; margin-bottom: 20px;">
          <h1 style="font-size: 28px; margin: 0;">Jane Smith</h1>
          <p style="margin: 6px 0 0; font-size: 15px; color: #4b5563;">
            jane.smith@email.com · (555) 555‑5555 · New York, NY
          </p>
        </header>

        <section style="margin-bottom: 14px;">
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 4px; margin: 0 0 8px;">
            Professional Summary
          </h2>
          <p style="margin: 0; font-size: 14px; color: #374151;">
            Project manager with 7+ years of experience coordinating cross‑functional teams, managing
            budgets, and delivering complex initiatives on time for public and private sector clients.
            Strong track record in Agile and hybrid methodologies, with a focus on stakeholder alignment
            and continuous improvement. Experienced in change management and post‑launch support.
          </p>
        </section>

        <section style="margin-bottom: 16px;">
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 4px; margin: 0 0 8px;">
            Experience
          </h2>
          <article style="margin-bottom: 14px;">
            <p style="margin: 0; font-size: 14px; font-weight: 600;">
              Project Manager · Global Corp
              <span style="float: right; font-weight: normal; color: #4b5563;">2018 – Present</span>
            </p>
            <p style="margin: 3px 0 0; font-size: 12px; color: #6b7280;">New York, NY</p>
            <ul style="margin: 3px 0 0 20px; padding: 0; font-size: 14px; color: #374151;">
              <li>Managed cross‑functional teams to deliver projects on time and under budget.</li>
              <li>Coordinated communication between stakeholders and technical teams.</li>
              <li>Implemented new PMO tools and reporting dashboards to improve visibility.</li>
              <li>Led vendor evaluations and contract negotiations for key software and service providers.</li>
            </ul>
          </article>
          <article>
            <p style="margin: 0; font-size: 14px; font-weight: 600;">
              Assistant Project Manager · City Org
              <span style="float: right; font-weight: normal; color: #4b5563;">2014 – 2018</span>
            </p>
            <p style="margin: 3px 0 0; font-size: 12px; color: #6b7280;">New York, NY</p>
            <ul style="margin: 3px 0 0 20px; padding: 0; font-size: 14px; color: #374151;">
              <li>Supported planning, scheduling, and reporting for municipal projects.</li>
              <li>Maintained documentation and improved internal communication workflows.</li>
              <li>Facilitated weekly status meetings and produced executive summaries for leadership.</li>
            </ul>
          </article>
        </section>

        <section>
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 4px; margin: 0 0 8px;">
            Education
          </h2>
          <p style="margin: 0 0 6px; font-size: 14px; color: #374151;">
            B.A. in Business Administration, City University · Dean's List
          </p>
          <p style="margin: 0 0 6px; font-size: 14px; color: #374151;">
            Certificate in Agile Project Management, Online Institute
          </p>
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 4px; margin: 14px 0 8px;">
            Skills
          </h2>
          <p style="margin: 0; font-size: 14px; color: #374151;">
            Project planning · Stakeholder communication · Risk management · Budget tracking ·
            Process improvement · Jira & Asana · MS Project
          </p>
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 4px; margin: 14px 0 8px;">
            Highlights
          </h2>
          <ul style="margin: 0 0 0 20px; padding: 0; font-size: 14px; color: #374151;">
            <li>Delivered 15+ projects with on‑time completion.</li>
            <li>Recognized for clear communication and stakeholder alignment.</li>
            <li>Led quarterly planning and resource allocation for a 12‑person team.</li>
            <li>Received Global Corp Excellence Award for project delivery in 2022.</li>
          </ul>
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; border-bottom: 1px solid #9ca3af; padding-bottom: 4px; margin: 14px 0 8px;">
            Certifications
          </h2>
          <p style="margin: 0 0 6px; font-size: 14px; color: #374151;">
            PMP® (Project Management Professional) · Scrum Master (CSM)
          </p>
          <p style="margin: 0; font-size: 14px; color: #374151;">
            PRINCE2 Practitioner · ITIL Foundation
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
      <main style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; width: 100%; box-sizing: border-box; background: #ffffff;">
        <header style="background: linear-gradient(90deg, #4f46e5, #ec4899); color: white; padding: 24px 32px;">
          <h1 style="font-size: 28px; margin: 0 0 4px;">Alex Creative</h1>
          <p style="margin: 0; font-size: 14px;">
            Designer & Frontend Developer · alex.creative@example.com · (555) 555‑5555
          </p>
        </header>

        <section style="padding: 22px 32px 28px;">
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 0 0 12px;">
            Highlight Projects
          </h2>
          <article style="background: #ffffff; border-radius: 10px; padding: 16px 18px; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); margin-bottom: 14px;">
            <h3 style="font-size: 15px; font-weight: 600; margin: 0 0 4px;">Portfolio Website Redesign</h3>
            <p style="margin: 0 0 4px; font-size: 14px; color: #4b5563;">
              A bold, colorful personal brand site built with Next.js and Tailwind CSS.
            </p>
            <p style="margin: 0; font-size: 12px; color: #6b7280;">Improved engagement by 40% and time on page by 25%. Featured in a design newsletter.</p>
          </article>

          <article style="background: #ffffff; border-radius: 10px; padding: 16px 18px; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); margin-bottom: 14px;">
            <h3 style="font-size: 15px; font-weight: 600; margin: 0 0 4px;">Mobile App UI Kit</h3>
            <p style="margin: 0 0 4px; font-size: 14px; color: #4b5563;">
              Designed a reusable UI kit for a cross‑platform mobile app, focusing on accessibility and motion.
            </p>
            <p style="margin: 0; font-size: 12px; color: #6b7280;">Documented patterns and components in an interactive Storybook.</p>
          </article>

          <article style="background: #ffffff; border-radius: 10px; padding: 16px 18px; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); margin-bottom: 14px;">
            <h3 style="font-size: 15px; font-weight: 600; margin: 0 0 4px;">E‑commerce Design System</h3>
            <p style="margin: 0 0 4px; font-size: 14px; color: #4b5563;">
              Created a scalable design system for a retail brand, including tokens, components, and documentation.
            </p>
            <p style="margin: 0; font-size: 12px; color: #6b7280;">Reduced design‑to‑dev handoff time by 50% and improved consistency across 8 product areas.</p>
          </article>

          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 16px 0 10px;">
            Skills
          </h2>
          <p style="margin: 0; font-size: 14px; color: #4b5563;">
            Branding · UI/UX design · Prototyping · Frontend development (React, Next.js) · Motion design ·
            User research · Design systems
          </p>
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 14px 0 8px;">
            Tools
          </h2>
          <p style="margin: 0; font-size: 14px; color: #4b5563;">
            Figma · Adobe XD · Illustrator · After Effects · Git · Storybook
          </p>
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 14px 0 8px;">
            About
          </h2>
          <p style="margin: 0; font-size: 14px; color: #4b5563;">
            Blends visual storytelling with clean, accessible interfaces, focusing on products that feel
            playful yet easy to use. Interested in design systems, design‑dev collaboration, and inclusive design.
          </p>
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 14px 0 8px;">
            Experience
          </h2>
          <p style="margin: 0; font-size: 14px; color: #4b5563;">
            Senior Product Designer · Studio XYZ
            <span style="float: right; font-size: 12px; color: #6b7280;">2019 – Present · Remote</span>
          </p>
          <ul style="clear: both; margin: 6px 0 0 20px; padding: 0; font-size: 14px; color: #4b5563;">
            <li>Leads end‑to‑end design for web and mobile experiences.</li>
            <li>Partners with engineering to ship polished, performant UI.</li>
            <li>Conducted user research and A/B tests that informed major product decisions.</li>
            <li>Presented at 2 design conferences on design systems and accessibility.</li>
          </ul>
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.18em; color: #6b7280; margin: 14px 0 8px;">
            Education
          </h2>
          <p style="margin: 0; font-size: 14px; color: #4b5563;">
            B.Des. in Visual Communication · School of Design · Focus in Interaction Design
          </p>
          <p style="margin: 4px 0 0; font-size: 14px; color: #4b5563;">
            UX Writing & Content Design Workshop · Nielsen Norman Group
          </p>
        </section>
      </main>
    `
  }
];
