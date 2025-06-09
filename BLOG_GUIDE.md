# Blog Post Creation Guide

This guide explains how to create and manage blog posts in this Astro template.

## Blog Post Structure

Blog posts are located in `src/features/blog/content/{lang}/` where `{lang}` is either `en` or `fr`.

### Required File Structure

```mdx
---
lang: 'en'                    # Language code ('en' or 'fr')
title: 'Your Post Title'      # Title of your blog post
description: 'Description'    # Brief description (appears in cards and meta)
pubDate: 2025-06-08          # Publication date (YYYY-MM-DD)
heroImage:                    # Hero image configuration
  url: '/src/assets/placeholder.webp'  # Path to image from project root
  alt: 'Image Description'    # Alt text for accessibility
tags: ['tag1', 'tag2']       # Array of relevant tags
difficulty: 'beginner'       # 'beginner', 'intermediate', or 'advanced'
isDraft: false              # Set to true to hide from production
featured: false             # Set to true to feature on homepage
relatedPosts: []           # Array of related post references
---

import InfoAlert from '@/features/blog/components/InfoAlert.astro';
```

## Available Components

### InfoAlert
Use for important notes or callouts:
```mdx
<InfoAlert title="Important Note">
  Your important message here.
</InfoAlert>
```

## Writing Guidelines

### 1. File Naming
- Use kebab-case for filenames (e.g., `my-blog-post.mdx`)
- Place files in the correct language folder (`en/` or `fr/`)

### 2. Frontmatter Fields
- **lang**: Match the folder it's in ('en' or 'fr')
- **title**: Clear, descriptive title
- **description**: 1-2 sentences summarizing the post
- **pubDate**: Future dates are fine, used for scheduling
- **heroImage**: 
  - Store images in `src/assets/`
  - Use relative path from your post to the image
  - Always provide alt text
- **tags**: Use existing tags when possible for better categorization
- **difficulty**: Choose appropriate level
- **isDraft**: Use during writing process
- **featured**: Only one or two posts should be featured

### 3. Content Structure
```mdx
## Introduction
Brief overview of what the post will cover

<InfoAlert title="Quick Tip">
  Add important notes or tips here
</InfoAlert>

## Main Content Sections
Use H2 (##) for main sections
Use H3 (###) for subsections

### Code Examples
\```typescript
// Your code here
\```

## Conclusion
Summarize key points and next steps
```

## Example Blog Post Template

```mdx
---
lang: 'en'
title: 'Your Amazing Post Title'
description: 'A clear description of what readers will learn from this post.'
pubDate: 2025-06-08
heroImage:
  url: '/src/assets/placeholder.webp'
  alt: 'Descriptive alt text for the hero image'
tags: ['astro', 'web-development']
difficulty: 'beginner'
isDraft: false
featured: false
relatedPosts: []
---

import InfoAlert from '@/features/blog/components/InfoAlert.astro';

## Introduction

Start with a compelling introduction about your topic.

<InfoAlert title="Key Point">
  Highlight an important concept or takeaway.
</InfoAlert>

## First Main Section

Your main content here. Use clear headings and subheadings.

### Subsection

Include code examples when relevant:

\```typescript
function example() {
  console.log("Hello, World!");
}
\```

## Conclusion

Summarize the key points and provide next steps or resources.
```

## Technical Details

### Schema Validation
Your blog post must match the schema defined in `src/content.config.ts`:
```typescript
schema: ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.object({
      url: image(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).optional(),
    relatedPosts: z.array(reference('blog')),
    readingTimeMinutes: z.number().optional(),
    isDraft: z.boolean(),
    lang: z.enum(['en', 'fr']).optional().default('en'),
  })
```

### URL Structure
- English posts: `/en/blog/[slug]`
- French posts: `/fr/blog/[slug]`
- Default route: `/blog/[slug]`

## Development Workflow

1. Create new file in appropriate language folder
2. Copy template structure
3. Write content in MDX format
4. Test locally with `bun dev`
5. Check for schema validation errors
6. Commit and push changes

## Tips

- Use the preview feature in VS Code with MDX plugin
- Test your post in both light and dark themes
- Verify all code examples work as shown
- Check related posts links are valid
- Optimize images before adding them
- Keep drafts as `isDraft: true` until ready to publish
