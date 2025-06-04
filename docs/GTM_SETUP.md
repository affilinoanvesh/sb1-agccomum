# Google Tag Manager (GTM) Setup for Single Page Applications

This documentation explains how to properly track conversions and events in your React SPA using Google Tag Manager.

## The Problem

In Single Page Applications (SPAs) like React, traditional GTM only fires on initial page load. Route changes don't trigger page reloads, so GTM doesn't track navigation between pages or conversions happening on route changes.

## The Solution - Correct GTM Workflow

**Important**: You do NOT need to hardcode conversion IDs in your React app! Here's the correct flow:

1. **React App** → Pushes structured events to `dataLayer`
2. **GTM** → Listens for these events and fires tags with conversion IDs configured in GTM
3. **Ad Platforms** → Receive conversion data from GTM tags

```
React App: trackLeadGeneration('homepage') 
    ↓
dataLayer: { event: 'lead_generated', form_source: 'homepage', value: 100 }
    ↓
GTM: Detects 'lead_generated' event → Fires Google Ads + LinkedIn tags
    ↓
Ad Platforms: Receive conversions with your configured IDs
```

## Implementation Overview

### What the React App Does:
- Tracks page views on route changes
- Pushes form submissions to dataLayer
- Pushes lead generation events to dataLayer
- Pushes button clicks to dataLayer

### What GTM Does:
- Listens for these events
- Fires Google Ads conversion tags
- Fires LinkedIn conversion tags
- Fires Facebook Pixel events
- Manages all conversion IDs and tracking codes

## Quick Setup

### 1. Your React App (Already Implemented)

The React app pushes these events to `dataLayer`:

```javascript
// Page view (automatic on route change)
{ event: 'page_view', page_path: '/about' }

// Lead generation (when form submitted)
{ 
  event: 'lead_generated', 
  form_source: 'homepage',
  conversion_value: 100,
  conversion_currency: 'USD'
}

// Button clicks
{ 
  event: 'button_click', 
  button_name: 'Start Your AI Journey',
  click_location: 'Homepage Hero'
}
```

### 2. GTM Container Setup (This is where you configure conversion IDs)

#### Step 1: Create Variables
In GTM, create these built-in variables:
- `form_source`
- `conversion_value` 
- `conversion_currency`
- `button_name`
- `click_location`

#### Step 2: Create Triggers

**Lead Generation Trigger:**
- Trigger Type: Custom Event
- Event name: `lead_generated`

**Page View Trigger:**
- Trigger Type: Custom Event  
- Event name: `page_view`

**Button Click Trigger:**
- Trigger Type: Custom Event
- Event name: `button_click`

#### Step 3: Create Tags

**Google Ads Conversion Tag:**
- Tag Type: Google Ads Conversion Tracking
- Conversion ID: `AW-YOUR-ACTUAL-ID` (enter your real Google Ads conversion ID here)
- Conversion Label: `your-conversion-label` (from Google Ads)
- Conversion Value: `{{conversion_value}}`
- Currency Code: `{{conversion_currency}}`
- Trigger: Lead Generation Trigger

**LinkedIn Insight Tag:**
- Tag Type: LinkedIn Insight Tag  
- Partner ID: `YOUR-LINKEDIN-PARTNER-ID` (from LinkedIn Campaign Manager)
- Conversion ID: `YOUR-CONVERSION-ID` (from LinkedIn)
- Conversion Value: `{{conversion_value}}`
- Trigger: Lead Generation Trigger

## Getting Your Conversion IDs (Configure in GTM, not React)

### Google Ads:
1. Google Ads → Tools & Settings → Conversions
2. Create conversion action → Get conversion ID: `AW-123456789`
3. Get conversion label: `AbCdEfGhIj`
4. Enter these in your GTM Google Ads Conversion tag

### LinkedIn Campaign Manager:
1. Campaign Manager → Analyze → Conversion Tracking
2. Create conversion → Get Partner ID and Conversion ID  
3. Enter these in your GTM LinkedIn Insight tag

### Facebook/Meta:
1. Facebook Business Manager → Events Manager
2. Get Pixel ID
3. Create GTM Facebook Pixel tag with your Pixel ID

## Testing Your Setup

### 1. Test in GTM Preview Mode
1. GTM → Preview → Enter your website URL
2. Navigate your site and submit forms
3. Watch events fire in GTM debugger

### 2. Check DataLayer in Browser
```javascript
// Open browser console and check:
console.log(window.dataLayer);

// You should see events like:
[
  { event: 'page_view', page_path: '/' },
  { event: 'lead_generated', form_source: 'homepage', conversion_value: 100 }
]
```

### 3. Verify Conversions
- Google Ads: Check conversions in Google Ads dashboard
- LinkedIn: Check conversion tracking in Campaign Manager  
- Facebook: Check Events Manager for pixel fires

## Why This Approach is Better

✅ **Separation of Concerns**: React handles user interactions, GTM handles tracking codes
✅ **Easy Updates**: Change conversion IDs in GTM without code changes
✅ **Multiple Platforms**: One event can trigger multiple ad platform tags
✅ **Version Control**: No tracking codes in your source code
✅ **Testing**: Easy to test with GTM preview mode

## Events Your App Sends to GTM

### Page Views (Automatic)
```javascript
{
  event: 'page_view',
  page_title: 'Page Title',
  page_location: 'https://yoursite.com/page',
  page_path: '/page'
}
```

### Lead Generation (Form Submissions)
```javascript
{
  event: 'lead_generated',
  form_source: 'homepage_hero',
  conversion_value: 100,
  conversion_currency: 'USD',
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

### Button Clicks
```javascript
{
  event: 'button_click',
  button_name: 'Start Your AI Journey',
  click_location: 'Homepage Hero'
}
```

### Popup Opens
```javascript
{
  event: 'popup_open',
  popup_type: 'contact_form',
  trigger_source: 'homepage_hero'
}
```

## Adding Tracking to New Components

```typescript
import { useGTM } from '../hooks/useGTM';

function MyComponent() {
  const { trackLeadGeneration, trackButtonClick } = useGTM();
  
  const handleFormSubmit = () => {
    // This pushes to dataLayer - GTM handles the rest
    trackLeadGeneration('my_component', 150);
  };
  
  const handleButtonClick = () => {
    trackButtonClick('My Button', 'My Component');
  };
}
```

## Summary

Your React app is now correctly set up to push events to GTM. The key insight is:

- **React**: Sends structured data about user actions
- **GTM**: Manages all conversion tracking codes and IDs
- **Result**: Clean separation and easy management

No more hardcoded conversion IDs in your React code! 🎉 