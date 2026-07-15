import React from "react";
import AnimateIn from "./AnimateIn";

const Projects = () => {
  const projects = [
    {
      title: "Student Management System",
      subtitle: "Laravel + Inertia.js + React + TypeScript",
      description:
        "A full-stack academic management system (Laravel 12 + Inertia.js + React 19 + TypeScript) for tracking student records and performance.",
      highlights: [
        "Implemented RBAC (Admin/Staff), Burmese/English student profiles, and course enrollment workflows",
        "Built automatic GPA computation with PDF transcript/marks-sheet generation (Myanmar font support)",
        "Developed an Inertia.js SPA with React 19, TanStack Table, global search, and dark mode",
        "Managed academic structure (years/semesters/majors/courses) with Eloquent relationships",
      ],
      tech: [
        "Laravel",
        "Inertia.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MySQL",
        "mPDF",
      ],
      image: "/add-student.png",
      demo: "https://wailinnaing-portfolio.vercel.app/",
      github: "https://github.com/wailinnaing432019/Student-Management-Sys",
    },
    {
      title: "Pharmacy Management System",
      subtitle: "Laravel + Inertia.js + React + TypeScript",
      description:
        "A pharmacy management platform (Laravel 12 + Inertia.js + React 19 + TypeScript) with inventory, POS, and storefront.",
      highlights: [
        "Built expiry-aware FIFO inventory with Code-128 barcodes, low-stock/expiry alerts, and purchase-batch restocking",
        "Developed a cashier POS (QR/barcode scanner, cart, refunds) plus admin sales/orders management with PDF invoices",
        "Created a public customer storefront with search/filter/sort, cart, and Google OAuth checkout",
        "Surfaced sales analytics with Recharts dashboards and CSV/PDF export",
      ],
      tech: [
        "Laravel",
        "Inertia.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SQLite",
        "DomPDF",
        "Recharts",
        "Socialite",
      ],
      image: "",
      demo: "",
      github: "https://github.com/wailinnaing432019/Phrmacy_Management_System",
    },
    {
      title: "Staff Management System",
      subtitle: "Laravel + Inertia.js + React + TypeScript",
      description:
        "A staff information management system (Laravel 11 + Inertia.js + React 18 + TypeScript) for HR records.",
      highlights: [
        "Implemented staff CRUD with photo attachments, family records, and history tracking",
        "Built multi-keyword search across Name/Position/Department with custom suggestion inputs",
        "Developed an Inertia.js SPA with SweetAlert2 confirmations, paginated results, and print/PDF export",
        "Designed MySQL schemas for secure, relational employee record management",
      ],
      tech: [
        "Laravel",
        "Inertia.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MySQL",
        "SweetAlert2",
      ],
      image: "",
      demo: "",
      github: "https://github.com/wailinnaing432019/staff-info-management",
    },
    {
      title: "Finance Tracker App",
      subtitle: "Laravel + PHP + MySQL + Alpine.js",
      description:
        "A personal finance tracker (Laravel 10 + Blade + Alpine.js + Tailwind) for multi-account money management.",
      highlights: [
        "Implemented multi-account tracking with income/expense categorization, fund transfers, and balance validation",
        "Added data export to PDF and CSV, advanced search, and date-filtered transaction history",
        "Integrated Google OAuth and email verification authentication with profile management",
        "Built a responsive Blade + Alpine.js UI with clean architecture",
      ],
      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "Blade",
        "Tailwind CSS",
        "Alpine.js",
        "Vite",
        "Sanctum",
        "Socialite",
        "Dompdf",
      ],
      image: "",
      demo: "",
      github:
        "https://github.com/wailinnaing432019/FinanceTrackerAppWithLaravel",
    },
    {
      title: "Canteen Management System",
      subtitle: "Laravel + PHP + MySQL + Livewire",
      description:
        "A restaurant/canteen management platform (Laravel 10 + Livewire + Blade + Tailwind) with multi-role ordering.",
      highlights: [
        "Built a role-based platform with customer self-service ordering, kitchen operations, and purchaser stock management",
        "Developed an admin Livewire dashboard for menu, category, table, employee, and order management with Chart.js analytics",
        "Added multi-guard authentication (customers vs staff), Google OAuth, and PDF invoice/export generation",
        "Surfaced operational insights with Chart.js and Swiper.js UI components",
      ],
      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "Blade",
        "Livewire",
        "Tailwind CSS",
        "Chart.js",
        "DomPDF",
        "Socialite",
        "Sanctum",
      ],
      image: "",
      demo: "",
      github: "https://github.com/wailinnaing432019/CanteenManagementSystem",
    },
    {
      title: 'Stock Management System',
      subtitle: 'Next.js · Internship OJT (MTM Myanmar)',
      description: 'A stock/inventory management system built as my on-the-job internship project at MTM Myanmar, using Next.js.',
      highlights: [
        'Built as my on-the-job training (OJT) project during the MTM Myanmar internship',
        'Developed with Next.js (App Router) for production-ready React',
        'Inventory and stock management workflows with admin views',
        'Deployed live on Render as a working demo'
      ],
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      image: '',
      demo: 'https://stock-mgt-intern-pj-test-host.onrender.com/',
      github: ''
    },
    {
      title: "Electronic POS — Market Basket Analysis",
      subtitle: "Full-Stack Electrical POS · FP-Growth",
      description:
        "A full-stack Point-of-Sale web app for electrical supply shops, with an embedded FP-Growth recommendation engine.",
      highlights: [
        "Built a Flask POS with customer storefront, cart/checkout, and an admin BI dashboard",
        "Embedded FP-Growth association-rule mining (mlxtend) auto-running nightly via APScheduler to surface product recommendations",
        "Added sales KPIs, category breakdowns, Linear Regression revenue forecasting, and low-stock alerts",
        "Visualized insights with Chart.js and Bootstrap 5 across the admin panel",
      ],
      tech: [
        "Python",
        "Flask",
        "MySQL",
        "Bootstrap 5",
        "Chart.js",
        "mlxtend",
        "FP-Growth",
        "Pandas",
        "APScheduler",
        "scikit-learn",
      ],
      image: "",
      demo: "",
      github:
        "https://github.com/wailinnaing432019/electronic_pos_market_basket",
    },
    {
      title: "CyberSocial (Security Learning Sandbox)",
      subtitle: "Node.js + Express + MySQL · Security Focus",
      description:
        "A real-time social/chat app built as a hands-on sandbox for secure fullstack development against a MySQL backend.",
      highlights: [
        "Prevented SQL injection by using the Sequelize ORM for parameterized queries instead of raw SQL",
        "Secured credentials with bcrypt password hashing (salt rounds) and JWT-based authentication",
        "Enforced authorization with a verifyToken middleware and per-message ownership checks on edit/delete",
        "Handled file uploads, input validation, and CORS as part of a defense-in-depth learning exercise",
      ],
      tech: [
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize",
        "JWT",
        "bcrypt",
        "Socket.io",
      ],
      image: "",
      demo: "",
      github: "https://github.com/wailinnaing432019/CyberSocial",
    },
    {
      title: 'Laravel 8 Pizza Order System',
      subtitle: 'Laravel 8 · Early Project (2022)',
      description: 'My first Laravel project — a pizza ordering system built during an online class, featuring basic CRUD and a simple API.',
      highlights: [
        'Built as my introduction to Laravel (v8) and MVC structure',
        'Implemented basic order CRUD with a simple REST API',
        'Learned routing, Eloquent, and Blade templating hands-on',
        'The starting point of my self-directed learning journey'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'REST API'],
      image: '',
      demo: '',
      github: 'https://github.com/YanLinAung123/laravel8-pizza-order-system'
    }
  ];

  return (
    <section className="section projects" id="projects">
      <AnimateIn delay={100}>
        <div className="section-title-wrapper">
          <span className="section-number">02.</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
      </AnimateIn>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <AnimateIn key={index} delay={150 + index * 100}>
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>
              {project.image && (
                <figure className="project-figure">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                  />
                  <figcaption>{project.title}</figcaption>
                </figure>
              )}
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Source / README →
                  </a>
                )}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;
