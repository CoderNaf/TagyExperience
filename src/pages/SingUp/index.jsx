import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"

function SingUp(){
    return (
        <Tabs defaultValue="account" className="w-[400px]">
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                  Registrate con Tagy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="@Tageate"/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">password</Label>
                <Input id="password" type="password" placeholder="*********"  />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">password</Label>
                <Input id="password" type="Email" placeholder="Tagy@email.com"/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">password</Label>
                <Input id="password" type="number" placeholder="Cel Phone"  />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Sing Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    )
}

export { SingUp }