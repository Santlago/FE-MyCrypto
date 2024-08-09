import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <main className="flex h-screen min-h-screen items-center justify-between">
            <nav className="absolute right-2 top-2">
                <ModeToggle />
            </nav>
            <aside className="max-h-screen w-1/2 hidden lg:block">
                <Image src="/login.png" alt="login-image" width="585" height="832" />
            </aside>
            <section className="flex flex-col m-auto items-center justify-center gap-7">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={225} height={163} />
                </Link>
                <Tabs defaultValue="login" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Already have an account? Use your login.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="pedroduarte@gmail.com" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Login</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sign Up</CardTitle>
                                <CardDescription>
                                    Don't have an account yet? Sign up.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="pedroduarte@gmail.com" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="confirmPassword">Confirm password</Label>
                                    <Input id="confirmPassword" type="confirmPassword" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>SignUp</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>
        </main>
    )
}