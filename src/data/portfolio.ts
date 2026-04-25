import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ProjectFrontmatter {
  title: string
  type: 'cosmetic' | 'capital' | 'fullkey' | 'design'
  image: string
  description: string
  order: number
}

export interface Project extends ProjectFrontmatter {
  slug: string
  content: string
}

export async function getPortfolioProjects(): Promise<Project[]> {
  try {
    const portfolioDir = path.join(
      process.cwd(),
      'src/content/portfolio'
    )

    if (!fs.existsSync(portfolioDir)) {
      fs.mkdirSync(portfolioDir, { recursive: true })
    }

    const files = fs
      .readdirSync(portfolioDir)
      .filter((f) => f.endsWith('.md'))

    const projects = files.map((file) => {
      const filePath = path.join(portfolioDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)

      return {
        slug: file.replace('.md', ''),
        ...(data as ProjectFrontmatter),
        content,
      }
    })

    return projects.sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('Error reading portfolio:', error)
    return []
  }
}
