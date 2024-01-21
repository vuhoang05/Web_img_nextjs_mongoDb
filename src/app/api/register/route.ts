import User from '@/models/User'
import connect from '@/app/utils/db';
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { email, password } = await request.json();
    await connect();
    const exitingUser = await User.findOne({ email });

    if (exitingUser) {
        return new NextResponse("email is aready in use", { status: 400 })

    }
    const hashpassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        email,
        password: hashpassword,
    })
    try {
        await newUser.save();
        return new NextResponse("User is created", { status: 200 });
    }
    catch (err: any) {
        return new NextResponse(err, {
            status: 500,
        });
    };

}
