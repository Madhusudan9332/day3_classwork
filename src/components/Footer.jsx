

const Footer = () => {
  // Array of links for the footer menu
  const footerLinks = [
    { text: 'About', url: '#' },
    { text: 'Careers', url: '#' },
    { text: 'History', url: '#' },
    { text: 'Services', url: '#' },
    { text: 'Projects', url: '#' },
    { text: 'Blog', url: '#' }
  ];

  // Array of social media links
  const socialMediaLinks = [
    { text: 'Facebook', url: '#' },
    { text: 'Instagram', url: '#' },
    { text: 'Twitter', url: '#' },
    { text: 'GitHub', url: '#' },
    { text: 'Dribbble', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <p className="text-center text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
        </p>
        <div className="flex justify-center mt-8">
          <ul className="flex flex-wrap justify-center">
            {/* Rendering footer links */}
            {footerLinks.map((link, index) => (
              <li key={index} className="mx-4">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-8">
          <ul className="flex flex-wrap justify-center">
            {/* Rendering social media links */}
            {socialMediaLinks.map((link, index) => (
              <li key={index} className="mx-4">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
