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
                <Label htmlFor="username" className="font-ibmMono">Name</Label>
                <Input id="username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="font-ibmMono">Last Name</Label>
                <Input id="username" placeholder=""/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="font-ibmMono">Username</Label>
                <Input id="password" placeholder="@Tageame"  />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="font-ibmMono">Email</Label>
                <Input id="password" type="Email" placeholder="Tagy@email.comCel Phone"  />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="font-ibmMono">password</Label>
                <Input id="password" type="Email" placeholder="*******"/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="font-ibmMono">celphone</Label>
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