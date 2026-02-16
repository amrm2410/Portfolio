export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  responseTime: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const CONTACT_INFO: ContactInfo = {
  email: 'amrm241020@gmail.com',
  phone: '+201118566341',
  location: 'Available Worldwide',
  responseTime: 'Within 24 hours'
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/amrm2410',
    icon: 'fab fa-github'
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/amrm-abbas/',
    icon: 'fab fa-linkedin'
  },
  {
    platform: 'behance',
    url: 'https://www.behance.net/amrabbas2410',
    icon: 'fab fa-behance'
  }
];

export const CONTACT_SECTION_TITLE = 'Get In Touch';
export const CONTACT_SECTION_SUBTITLE = "Have a project in mind? Let's create something great together.";
export const CONTACT_FORM_TITLE = 'Send Me a Message';
export const CONTACT_INFO_TITLE = 'Contact Information';
export const CONTACT_INFO_DESCRIPTION = 'Feel free to reach out. I typically respond within 24 hours.';
export const SOCIAL_TITLE = 'Connect With Me';
