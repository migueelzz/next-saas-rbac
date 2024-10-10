import { ability, getCurrentOrg } from '@/auth/auth'

import { NavLink } from './nav-link'
import { Button } from './ui/button'

export async function Tabs() {
  const org = getCurrentOrg()

  const permissions = await ability()

  const canUpdateOrganization = permissions?.can('update', 'Organization')
  const canGetProjects = permissions?.can('get', 'Project')
  const canGetMembers = permissions?.can('get', 'User')
  const canGetBilling = permissions?.can('get', 'Billing')

  return (
    <div className="border-b py-4">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center gap-2">
        {canGetProjects && (
          <Button
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
            asChild
          >
            <NavLink href={`/org/${org}`}>Projects</NavLink>
          </Button>
        )}

        {canGetMembers && (
          <Button
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
            asChild
          >
            <NavLink href={`/org/${org}/members`}>Members</NavLink>
          </Button>
        )}

        {(canUpdateOrganization || canGetBilling) && (
          <Button
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
            asChild
          >
            <NavLink href={`/org/${org}/settings`}>Settings & Billing</NavLink>
          </Button>
        )}
      </nav>
    </div>
  )
}
