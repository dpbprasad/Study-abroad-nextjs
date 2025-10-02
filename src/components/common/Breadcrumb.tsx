import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
  return (
    <div className="breadcrumb__area dark-green breadcrumb-space overflow-hidden custom-width position-relative z-1" style={{ backgroundImage: 'url(/assets/img/breadcrumb/breadcrumb.png)' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12">
            <div className="breadcrumb__content">
              <div className="breadcrumb__title-wrapper mb-15 mb-sm-10 mb-xs-5">
                <h1 className="breadcrumb__title color-white wow fadeInLeft animated" data-wow-delay=".2s">{title}</h1>
              </div>
              <div className="breadcrumb__menu wow fadeInLeft animated" data-wow-delay=".4s">
                <nav>
                  <ul>
                    {items.map((item, index) => (
                      <li key={index} className={item.active ? 'active' : ''}>
                        {item.href ? (
                          <span><Link href={item.href}>{item.label}</Link></span>
                        ) : (
                          <span>{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
