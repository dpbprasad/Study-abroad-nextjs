# Countries Page Documentation

## Overview
This document covers all the countries-related pages created for the Study Abroad Next.js website, including the main countries page and two sample variations for testing country-specific details features.

---

## 1. Main Countries Page

### Location
- **Page**: `src/app/countries/page.tsx`
- **Component**: `src/components/countries/CountriesSection.tsx`
- **CSS**: `src/app/countries/countries.css`
- **URL**: `/countries`

### Features

#### A. Country Tabs Sidebar (Left Column)
- **Layout**: 4-column width (col-lg-4)
- **Countries**: Australia, New Zealand, Canada, UK, Norway, USA
- **Styling**:
  - 40px left padding
  - Active tab: Light green text (#83CD20)
  - Non-active: Semi-transparent text
- **Behavior**: Sticky sidebar when scrolling
  - Becomes fixed at 135px from top
  - Stops at bottom before footer (15px gap)
  - Width preserved when sticky

#### B. University Cards (Right Column)
- **Layout**: 8-column width (col-lg-8)
- **Display**: 2-column grid
- **Universities per Country**:
  - Australia: 12 universities
  - New Zealand: 8 universities
  - Canada: 10 universities
  - UK: 10 universities
  - Norway: 6 universities
  - USA: 10 universities
- **Card Features**:
  - University logo (currently using placeholder: `/assets/img/uni-logo/deakin.png`)
  - University name
  - First university (Deakin) has external link
  - Hover effect: Green background (#83CD20) + white text
  - Smooth transition (0.3s ease)

#### C. Sticky Behavior
```javascript
// Key Parameters
const headerHeight = 100;        // Header height when sticky
const stickyTop = 135;            // Distance from top when fixed
const footerGap = 15;             // Gap from footer when at bottom

// States
'normal'   - Before scrolling past header
'fixed'    - Sidebar fixed at 135px from top
'absolute' - Sidebar at bottom when near footer
```

#### D. Scroll Behavior on Tab Click
- Scrolls smoothly to align universities with sticky sidebar
- Position: `contentTop - 135px`
- Behavior: smooth scroll animation

### CSS Classes Used
```css
/* Sticky sidebar */
.service-sidebar-sticky
.service-sidebar-sticky.is-fixed
.service-sidebar-sticky.is-absolute

/* Country tabs */
.countries__tab
.tab__btn
.tab__btn.active

/* University cards */
.countries__tab-content
.countries__tab-content__countries-name
```

---

## 2. Country Details Sample 1

### Location
- **Page**: `src/app/country-details-sample/page.tsx`
- **Component**: `src/components/countries/CountryDetailsSampleSection.tsx`
- **CSS**: `src/app/country-details-sample/country-details-sample.css`
- **URL**: `/country-details-sample`
- **Navigation**: Countries → Country Details Sample

### Features

#### A. Layout
Same country tabs sidebar as main page (left column)

#### B. Content (Right Column)
Displays country-specific details BEFORE the university list:

**1. Country Overview**
- Title (e.g., "Study in Australia")
- Description paragraph

**2. Why Study Here?**
- Bulleted list with green checkmarks
- 4 key highlights per country

**3. Quick Facts Box**
- Light green background (#F1F5EB)
- Displays:
  - Official Language
  - Currency
  - Average Tuition
  - Living Costs
  - Popular Cities

**4. Partner Universities**
- Section heading
- Same university cards as main page
- Same hover effects

### Sample Data Structure
```javascript
{
  details: {
    title: 'Study in Australia',
    description: '...',
    highlights: [
      'Home to 7 of the world\'s top 100 universities',
      'Post-study work visa opportunities (2-4 years)',
      // ...
    ],
    quickFacts: {
      'Official Language': 'English',
      'Currency': 'Australian Dollar (AUD)',
      // ...
    }
  },
  universities: [...]
}
```

---

## 3. Country Details Sample 2

### Location
- **Page**: `src/app/country-details-sample2/page.tsx`
- **Component**: `src/components/countries/CountryDetailsSample2Section.tsx`
- **CSS**: `src/app/country-details-sample2/country-details-sample2.css`
- **URL**: `/country-details-sample2`
- **Navigation**: Countries → Country Details Sample 2

### Features

#### A. Layout
Same country tabs sidebar as main page (left column)

#### B. Content Tabs (Top of Right Column)
Two horizontal tabs:
1. **Partner Universities** (Default)
2. **Country Details**

**Tab Styling:**
- Full width buttons
- Green underline for active tab (#83CD20)
- Smooth transition
- Font size: 18px, weight: 600

#### C. Tab Content

**Partner Universities Tab:**
- Section heading: "Partner Universities in [Country]"
- University cards grid (2 columns)
- Same hover effects as main page

**Country Details Tab:**
- Country title and description
- "Why Study Here?" section with highlights
- Quick Facts box
- Same styling as Sample 1

### Key Difference from Sample 1
Sample 1: Details shown BEFORE universities (single view)
Sample 2: Details shown in SEPARATE tab (tabbed view)

---

## Technical Implementation Details

### State Management
```javascript
// Country selection
const [activeCountry, setActiveCountry] = useState('australia');

// Sticky behavior
const [stickyState, setStickyState] = useState('normal' | 'fixed' | 'absolute');
const [sidebarWidth, setSidebarWidth] = useState(0);

// Content tabs (Sample 2 only)
const [activeContentTab, setActiveContentTab] = useState('universities');
```

### Refs Used
```javascript
const sidebarRef = useRef<HTMLDivElement>(null);    // Sidebar element
const sectionRef = useRef<HTMLElement>(null);       // Main section
const contentRef = useRef<HTMLDivElement>(null);    // Content area
```

### Scroll Calculation
```javascript
const handleTabChange = (tabId: string) => {
  setActiveTab(tabId);

  if (sectionRef.current && contentRef.current) {
    const stickyTopPosition = 135;
    const contentTop = contentRef.current.offsetTop + sectionRef.current.offsetTop;
    const scrollToPosition = contentTop - stickyTopPosition;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }
};
```

### University Card Hover Effect
```javascript
onMouseEnter={(e) => {
  e.currentTarget.style.backgroundColor = '#83CD20';
  const h5 = e.currentTarget.querySelector('h5');
  if (h5) h5.style.color = '#fff';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.backgroundColor = 'transparent';
  const h5 = e.currentTarget.querySelector('h5');
  if (h5) h5.style.color = '';
}}
```

---

## Color Scheme

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Green (Active states, hover) | Light Green | #83CD20 |
| Dark Green (Headings) | Dark Green | #034833 |
| Light Green Background | Very Light Green | #F1F5EB |
| Text | Gray | #666 |
| Border | Light Gray | #E3DBD8 |
| Hover Text | White | #fff |

---

## Responsive Behavior

### Desktop (> 991px)
- Sticky sidebar active
- 2-column university grid
- Full navigation visible

### Mobile (≤ 991px)
```css
.service-sidebar-sticky.is-fixed,
.service-sidebar-sticky.is-absolute {
  position: relative !important;
  top: 0 !important;
  bottom: auto !important;
  width: 100% !important;
}
```
- Sticky disabled
- Single column university grid
- Content tabs stack vertically (Sample 2)

---

## Issues Fixed During Development

### 1. Sticky Sidebar Not Working
**Problem**: CSS styles were missing on countries page
**Solution**: Created `countries.css` with sticky sidebar styles and imported in page

### 2. First Tab Click Scroll Issue
**Problem**: First click caused unwanted scroll behavior
**Note**: User reported but chose not to implement the fix (conditional scroll based on sticky state)

### 3. Active Tab Styling
**Problem**: Background color was being applied to active tab
**Solution**: Removed background, kept only text color change to #83CD20

---

## Assets Required

### Images
- **University Logo**: `/assets/img/uni-logo/deakin.png`
  - Currently using Deakin University logo as placeholder for all universities
  - Size: 1.1KB
  - Format: PNG

### Future Enhancement
Replace placeholder logos with actual university logos for each institution.

---

## Data Structure

### Country Data Object
```javascript
{
  countryId: {
    details: {
      title: string,
      description: string,
      highlights: string[],
      quickFacts: {
        [key: string]: string
      }
    },
    universities: [
      {
        name: string,
        image: string,
        link?: string  // Optional external link
      }
    ]
  }
}
```

---

## Navigation Menu Integration

All three pages are accessible via header navigation:

```
Countries ▼
  ├── Countries (Main page)
  ├── Country Details Sample (Sample 1)
  ├── Country Details Sample 2 (Sample 2)
  └── Country Details (Placeholder - not yet built)
```

---

## Next Steps / Future Enhancements

### Recommended Improvements:
1. **Real University Logos**: Replace placeholder with actual logos
2. **Individual Country Pages**: Create dedicated page for each country
3. **Dynamic Data**: Move country/university data to CMS or API
4. **Search Functionality**: Add university search/filter
5. **University Details**: Link to individual university profile pages
6. **Ranking Information**: Display university rankings
7. **Application Links**: Direct application links for each university
8. **Comparison Tool**: Allow students to compare universities
9. **Scholarship Info**: Add scholarship information per university
10. **Student Reviews**: Include testimonials for each country/university

### Which Sample to Use:
- **Sample 1**: Better for SEO and content-heavy approach (details visible immediately)
- **Sample 2**: Better for clean UI and user-driven exploration (tabbed interface)
- **Main Page**: Current production version (universities only, simple and fast)

---

## File Structure Summary

```
study-abroad-nextjs/
├── src/
│   ├── app/
│   │   ├── countries/
│   │   │   ├── page.tsx
│   │   │   └── countries.css
│   │   ├── country-details-sample/
│   │   │   ├── page.tsx
│   │   │   └── country-details-sample.css
│   │   └── country-details-sample2/
│   │       ├── page.tsx
│   │       └── country-details-sample2.css
│   └── components/
│       ├── countries/
│       │   ├── CountriesSection.tsx
│       │   ├── CountryDetailsSampleSection.tsx
│       │   └── CountryDetailsSample2Section.tsx
│       └── layout/
│           └── Header.tsx (navigation links)
└── public/
    └── assets/
        └── img/
            └── uni-logo/
                └── deakin.png
```

---

## Developer Notes

### When Making Changes:

1. **Adding New Countries**:
   - Add to `tabs` array
   - Add data to `countriesData` object
   - Follow existing structure

2. **Adding New Universities**:
   - Add to specific country's `universities` array
   - Include `name`, `image`, and optional `link`

3. **Modifying Sticky Behavior**:
   - Adjust `stickyTopPosition` (currently 135)
   - Adjust `headerHeight` (currently 100)
   - Adjust `footerGap` (currently 15)

4. **Changing Colors**:
   - Update CSS variables or hex codes
   - Main color: #83CD20 (light green)
   - Ensure contrast ratios meet accessibility standards

### Testing Checklist:
- [ ] Sticky sidebar works on scroll
- [ ] Tab switching scrolls correctly
- [ ] Hover effects work on university cards
- [ ] Active states display correctly
- [ ] Responsive behavior on mobile
- [ ] External links open in new tab
- [ ] All countries have data
- [ ] Navigation menu links work

---

## Version History

**Current Version**: 1.0
- Main countries page implemented
- Two sample variations created
- Sticky sidebar functionality working
- Hover effects implemented
- Navigation integrated

**Created**: October 2025
**Last Updated**: October 2025

---

## Support

For questions or issues:
1. Check this documentation first
2. Review the component code
3. Test on both sample pages to see different implementations
4. Refer to Services page (`src/components/services/ServiceDetailsSection.tsx`) for similar sticky sidebar implementation

---

*End of Documentation*
