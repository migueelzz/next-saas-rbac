import { defineAbilityFor, projectSchema } from '@next-saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user2-id' })

console.log(ability.can('get', 'Billing'))
console.log(ability.can('delete', project))
