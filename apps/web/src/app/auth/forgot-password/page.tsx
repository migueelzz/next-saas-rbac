import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default async function ForgotPassword() {
  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">
          Recover password
        </h1>

        <p className="text-muted-foreground text-sm">
          Enter your email address and we will send you a verification code
        </p>
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <Button type="submit" className="w-full">
        Continue
      </Button>

      <Button variant="link" size="sm" className="w-full" asChild>
        <Link href="/auth/sign-in">Back to sign in</Link>
      </Button>
    </form>
  )
}
