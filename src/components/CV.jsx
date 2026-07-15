import React from "react";
import AnimateIn from "./AnimateIn";

const CV = () => {
  return (
    <section id="cv" className="cv-section">
      <AnimateIn delay={100}>
        <div className="cv-header">
          <div className="cv-header-content">
            <h1>Wai Linn Naing</h1>
            <p className="cv-role">Junior Full-Stack Developer</p>
            <p className="cv-contact">📍 Yangon, Myanmar | ✉️ wailinnaing.dev@email.com | 📞 +95-xxx-xxx-xxxx</p>
            <p className="cv-contact">🔗 <a href="https://github.com/wailinnaing432019" target="_blank" rel="noopener noreferrer">github.com/wailinnaing432019</a> | <a href="https://wailinnaing-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={150}>
        <div className="cv-block">
          <h2>Professional Summary</h2>
          <p>
            Results-driven Junior Full-Stack Developer with <strong>5 years of self-directed study and hands-on project work</strong>, with applied projects consolidated on GitHub. Primary focus is <strong>PHP &amp; Laravel backend architecture</strong> — RESTful API design, MVC patterns, Eloquent ORM, and database optimization. Specializing in modern full-stack delivery with <strong>Laravel + Inertia.js + React</strong>, building SPA-style dashboards, clean API layers, and polished interfaces with Tailwind CSS. Comfortable across a broader stack — <strong>Next.js</strong>, <strong>Livewire</strong>, <strong>Python</strong>, <strong>Java</strong>, and <strong>C# / Spring Boot</strong> — gained through active, continuous learning. Currently deepening <strong>Next.js App Router / Server Components</strong> during an internship at MTM Myanmar.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="cv-block">
          <h2>Technical Skills</h2>
          <div className="cv-skills">
            <div className="cv-skill-category">
              <h3>Core — PHP / Laravel / Inertia</h3>
              <div className="cv-chips">
                <span className="cv-chip">PHP 8+ (OOP, MVC, Design Patterns)</span>
                <span className="cv-chip">Laravel (Eloquent, Artisan, Queues, Events, API Resources, Inertia.js)</span>
                <span className="cv-chip">Inertia.js (SPA-style Laravel + React)</span>
                <span className="cv-chip">MySQL / Database Design &amp; Optimization</span>
                <span className="cv-chip">RESTful API Design</span>
                <span className="cv-chip">Authentication &amp; Authorization (Sanctum, Passport)</span>
                <span className="cv-chip">MVC Architecture</span>
              </div>
            </div>
            <div className="cv-skill-category">
              <h3>Frontend</h3>
              <div className="cv-chips">
                <span className="cv-chip">JavaScript (ES6+) / TypeScript</span>
                <span className="cv-chip">React.js (Hooks, Component Architecture)</span>
                <span className="cv-chip">Next.js (App Router, Server Components)</span>
                <span className="cv-chip">Angular (TypeScript)</span>
                <span className="cv-chip">HTML5 / Semantic Markup</span>
                <span className="cv-chip">CSS3 / Tailwind CSS</span>
                <span className="cv-chip">Responsive Web Design</span>
                <span className="cv-chip">UI/UX Fundamentals</span>
              </div>
            </div>
            <div className="cv-skill-category">
              <h3>Developer Tools</h3>
              <div className="cv-chips">
                <span className="cv-chip">Git / GitHub</span>
                <span className="cv-chip">Composer</span>
                <span className="cv-chip">npm / yarn</span>
                <span className="cv-chip">Vite</span>
                <span className="cv-chip">Postman</span>
                <span className="cv-chip">VS Code</span>
              </div>
            </div>
          </div>
          <p className="cv-familiar">Also familiar / exploring: Livewire · Python · Java · C# · Spring Boot</p>
        </div>
      </AnimateIn>

      <AnimateIn delay={250}>
        <div className="cv-block">
          <h2>Key Projects</h2>
          <div className="cv-project">
            <h3>Student Management System</h3>
            <p className="cv-subtitle">Laravel + Inertia.js + React + TypeScript</p>
            <ul>
              <li>Full-stack academic management system (Laravel 12 + Inertia.js + React 19 + TypeScript) for tracking student records and performance.</li>
              <li>Implemented RBAC (Admin/Staff), Burmese/English student profiles, and course enrollment workflows.</li>
              <li>Built automatic GPA computation with PDF transcript/marks-sheet generation (Myanmar font support).</li>
              <li>Developed an Inertia.js SPA with React 19, TanStack Table, global search, and dark mode.</li>
            </ul>
          </div>
          <div className="cv-project">
            <h3>Pharmacy Management System</h3>
            <p className="cv-subtitle">Laravel + Inertia.js + React + TypeScript</p>
            <ul>
              <li>Pharmacy management platform (Laravel 12 + Inertia.js + React 19 + TypeScript) with inventory, POS, and storefront.</li>
              <li>Built expiry-aware FIFO inventory with Code-128 barcodes, low-stock/expiry alerts, and purchase-batch restocking.</li>
              <li>Developed a cashier POS (QR/barcode scanner, cart, refunds) plus admin sales/orders management with PDF invoices.</li>
              <li>Created a public customer storefront with search/filter/sort, cart, and Google OAuth checkout.</li>
            </ul>
          </div>
          <div className="cv-project">
            <h3>Staff Management System</h3>
            <p className="cv-subtitle">Laravel + Inertia.js + React + TypeScript</p>
            <ul>
              <li>Staff information management system (Laravel 11 + Inertia.js + React 18 + TypeScript) for HR records.</li>
              <li>Implemented staff CRUD with photo attachments, family records, and history tracking.</li>
              <li>Built multi-keyword search across Name/Position/Department with custom suggestion inputs.</li>
              <li>Developed an Inertia.js SPA with SweetAlert2 confirmations, paginated results, and print/PDF export.</li>
            </ul>
          </div>
          <div className="cv-project">
            <h3>Electronic POS — Market Basket Analysis</h3>
            <p className="cv-subtitle">Full-Stack Electrical POS · FP-Growth</p>
            <ul>
              <li>Full-stack Point-of-Sale web app for electrical supply shops with an embedded FP-Growth recommendation engine.</li>
              <li>Built a Flask POS with customer storefront, cart/checkout, and an admin BI dashboard.</li>
              <li>Embedded FP-Growth association-rule mining (mlxtend) auto-running nightly via APScheduler.</li>
              <li>Added sales KPIs, category breakdowns, Linear Regression revenue forecasting, and low-stock alerts.</li>
            </ul>
          </div>
          <div className="cv-project">
            <h3>Finance Tracker App</h3>
            <p className="cv-subtitle">Laravel + PHP + MySQL + Alpine.js</p>
            <ul>
              <li>Personal finance tracker (Laravel 10 + Blade + Alpine.js + Tailwind) for multi-account money management.</li>
              <li>Implemented multi-account tracking with income/expense categorization, fund transfers, and balance validation.</li>
              <li>Added data export to PDF and CSV, advanced search, and date-filtered transaction history.</li>
              <li>Integrated Google OAuth and email verification authentication with profile management.</li>
            </ul>
          </div>
          <div className="cv-project">
            <h3>Canteen Management System</h3>
            <p className="cv-subtitle">Laravel + PHP + MySQL + Livewire</p>
            <ul>
              <li>Restaurant/canteen management platform (Laravel 10 + Livewire + Blade + Tailwind) with multi-role ordering.</li>
              <li>Built a role-based platform with customer self-service ordering, kitchen operations, and purchaser stock management.</li>
              <li>Developed an admin Livewire dashboard for menu, category, table, employee, and order management with Chart.js analytics.</li>
              <li>Added multi-guard authentication (customers vs staff), Google OAuth, and PDF invoice/export generation.</li>
            </ul>
          </div>
          <div className="cv-project">
            <h3>Stock Management System</h3>
            <p className="cv-subtitle">Next.js · Internship OJT (MTM Myanmar)</p>
            <ul>
              <li>Stock/inventory management system built as an on-the-job internship project at MTM Myanmar, using Next.js.</li>
              <li>Built with Next.js (App Router) for production-ready React with inventory/stock workflows.</li>
              <li>Deployed live on Render as a working demo.</li>
            </ul>
          </div>
          <div className="cv-project">
            <h3>CyberSocial (Security Learning Sandbox)</h3>
            <p className="cv-subtitle">Node.js + Express + MySQL · Security Focus</p>
            <ul>
              <li>Real-time social/chat app built as a hands-on sandbox for secure fullstack development against a MySQL backend.</li>
              <li>Prevented SQL injection by using the Sequelize ORM for parameterized queries instead of raw SQL.</li>
              <li>Secured credentials with bcrypt password hashing and JWT-based authentication.</li>
              <li>Enforced authorization with a verifyToken middleware and per-message ownership checks on edit/delete.</li>
            </ul>
          </div>
          <div className="cv-project">
            <h3>Laravel 8 Pizza Order System</h3>
            <p className="cv-subtitle">Laravel 8 · Early Project (2022)</p>
            <ul>
              <li>First Laravel project — a pizza ordering system from an online class with basic CRUD and a simple API.</li>
              <li>Built as an introduction to Laravel (v8), MVC, routing, Eloquent, and Blade.</li>
              <li>The starting point of the self-directed learning journey (earlier account: github.com/YanLinAung123).</li>
            </ul>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={300}>
        <div className="cv-block">
          <h2>Practical &amp; Project Experience</h2>
          <ul>
            <li><strong>Backend Security &amp; API Design:</strong> Implementing secure authentication flows, role-based authorization, input sanitization, and CSRF protection in Laravel applications.</li>
            <li><strong>Database Optimization:</strong> Designing normalized schemas, writing efficient queries, managing migrations and seeders, and leveraging Eloquent relationships for data integrity.</li>
            <li><strong>Frontend Engineering:</strong> Building reusable, component-based UIs with React.js and Next.js, managing state with Hooks and Context API, and ensuring responsive layouts across devices.</li>
            <li><strong>Broader Stack &amp; Exploration:</strong> Familiar with Livewire, Python, Java, C#, and Spring Boot, picked up through continuous, self-directed learning alongside the core PHP/Laravel/React focus.</li>
            <li><strong>Code Quality &amp; Version Control:</strong> Writing clean, well-documented code; conducting code reviews; and maintaining organized Git workflows across all projects.</li>
            <li><strong>Continuous Learning:</strong> Actively expanding expertise in Next.js App Router, modern PHP patterns, advanced Laravel features, and contemporary frontend tooling.</li>
          </ul>
        </div>
      </AnimateIn>

      <AnimateIn delay={350}>
        <div className="cv-block">
          <h2>Education &amp; Continuous Learning</h2>
          <div className="cv-education">
            <div className="cv-education-item">
              <h3>Diploma / Degree in Computer Science / Information Technology</h3>
              <p className="cv-subtitle">University / Institution Name, City, Country — [Year]</p>
            </div>
            <div className="cv-education-item">
              <h3>Self-Directed Technical Training (5 Years)</h3>
              <ul>
                <li>Internship Completion Certificate — MTM Myanmar Co., Ltd.</li>
                <li>Full-Stack Web Development (Applied, project-based learning across 32+ repositories)</li>
                <li>PHP &amp; Laravel Ecosystem Deep-Dive (Eloquent, Queues, Events, API Resources, Inertia.js)</li>
                <li>Modern JavaScript &amp; React Ecosystem (State Management, Performance Optimization, Testing)</li>
                <li>Angular Framework (TypeScript, Component Architecture, Services)</li>
                <li>Machine Learning &amp; NLP with Python, Hugging Face, and Transformers</li>
                <li>Data Mining &amp; Market Basket Analysis (FP-Growth, Association Rules)</li>
                <li>Laravel Development — FDC Batch 13 (CodeLab Online Class)</li>
              </ul>
            </div>
            <div className="cv-education-item">
              <h3>Currently Learning</h3>
              <ul>
                <li>Next.js (App Router, Server Components, Server Actions, ISR/SSR)</li>
                <li>Advanced Laravel Patterns (Queues, Events, Broadcasting, Horizon)</li>
                <li>Testing with PHPUnit, Pest, and Jest/React Testing Library</li>
                <li>TypeScript integration with Laravel, React, and Angular</li>
              </ul>
            </div>
            <p className="cv-note">Earlier learning projects (2022–2024) are on a previous GitHub account: <a href="https://github.com/YanLinAung123" target="_blank" rel="noopener noreferrer">github.com/YanLinAung123</a>.</p>
          </div>
          <p className="cv-footer">References and full project portfolio available upon request.</p>
        </div>
      </AnimateIn>
    </section>
  );
};

export default CV;
