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


function SingIn(){
    return(
        <Tabs defaultValue="account" className="w-[420px]">
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle className=" font-ibm font-medium">Account</CardTitle>
            <CardDescription>
                Ingresa con tu cuenta de tagy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username" className=" font-ibmMono">Username</Label>
              <Input id="username" placeholder="@Tageate"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className=" font-ibmMono ">password</Label>
              <Input id="password" type="password" placeholder="*********"  />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="font-ibmMono hover:bg-[#818FB4]">Sing In</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    )
}

export { SingIn }