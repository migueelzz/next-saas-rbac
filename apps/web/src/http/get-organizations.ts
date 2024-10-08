import { Role } from '@next-saas/auth'

import { api } from './api-client'

interface GetOrganizationResponse {
  organizations: {
    name: string
    id: string
    slug: string
    avatarUrl: string | null
    role: Role
  }[]
}

export async function getOrganizations() {
  const result = await api.get('organizations').json<GetOrganizationResponse>()

  return result
}
