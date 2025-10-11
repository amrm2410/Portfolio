# How to Implement Lazy Loading in Project Detail Pages

## Example: Employee360Details Component

### Step 1: Import LazyImage Component

```jsx
// At the top of Employee360Details.jsx
import LazyImage from '../LazyImage/LazyImage';
```

### Step 2: Replace img tags with LazyImage

#### Before:
```jsx
<div className="mobile-screens-grid">
    <img src={onboarding} alt="Mobile Onboarding" className="mobile-img" />
    <img src={onboarding1} alt="Mobile Onboarding Screen" className="mobile-img" />
    <img src={mobile1} alt="Mobile Screen 1" className="mobile-img" />
    // ... more images
</div>
```

#### After:
```jsx
<div className="mobile-screens-grid">
    <LazyImage src={onboarding} alt="Mobile Onboarding" className="mobile-img" />
    <LazyImage src={onboarding1} alt="Mobile Onboarding Screen" className="mobile-img" />
    <LazyImage src={mobile1} alt="Mobile Screen 1" className="mobile-img" />
    // ... more images
</LazyImage>
```

### Step 3: Update CSS if needed

The LazyImage component wraps your image in a div, so update your CSS:

```css
/* If you had specific styles for .mobile-img */
.mobile-img {
    width: auto;
    max-width: 100%;
    height: auto;
    /* ... other styles */
}

/* Add this to ensure wrapper doesn't break layout */
.lazy-image-wrapper.mobile-img {
    width: auto;
    max-width: 100%;
}

.lazy-image-wrapper.mobile-img .lazy-image {
    width: auto;
    max-width: 100%;
    height: auto;
}
```

## Files to Update

Apply LazyImage to these files:

### High Priority (Many Images):
1. ✅ `src/components/Employee360Details/Employee360Details.jsx`
2. ✅ `src/components/BreadfastDetails/BreadfastDetails.jsx`
3. ✅ `src/components/ByetDetails/ByetDetails.jsx`
4. ✅ `src/components/Health360Details/Health360Details.jsx`
5. ✅ `src/components/StovaDetails/StovaDetails.jsx`
6. ✅ `src/components/SiwaGardenDetails/SiwaGardenDetails.jsx`
7. ✅ `src/components/GatesAdminRequestDetails/GatesAdminRequestDetails.jsx`
8. ✅ `src/components/EDestinationDetails/EDestinationDetails.jsx`

### Medium Priority:
9. ✅ `src/components/Projects/Projects.jsx` (cover images)

### Keep Eager Loading (No LazyImage needed):
- ❌ Hero section images
- ❌ Navigation logo
- ❌ Small icons

## Quick Replace Pattern

Use Find & Replace in your editor:

**Find:**
```regex
<img src=\{(.+?)\} alt="(.+?)" className="(.+?)" />
```

**Replace:**
```
<LazyImage src={$1} alt="$2" className="$3" />
```

Then add the import at the top:
```jsx
import LazyImage from '../LazyImage/LazyImage';
```

## Testing

After implementation, test:

1. **Open DevTools Network Tab**
   - Filter by "Img"
   - Scroll the page
   - Images should load only when scrolling to them

2. **Check Loading State**
   - Slow down network to "Slow 3G"
   - Refresh page
   - Should see skeleton loading animations

3. **Verify Performance**
   - Run Lighthouse audit
   - Check "Defer offscreen images" passes

## Advanced: Custom Placeholder

You can add custom placeholders:

```jsx
<LazyImage
    src={coverImage}
    alt="Project Cover"
    className="cover-image"
    placeholder={
        <div style={{ background: '#1a1f2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-image" style={{ fontSize: '3rem', color: '#00d4aa' }}></i>
        </div>
    }
/>
```
