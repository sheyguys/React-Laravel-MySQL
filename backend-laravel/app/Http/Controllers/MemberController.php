<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Member;
class MemberController extends Controller
{
    public function showall()
    {
        return Member::all();
    }
 
    public function showbyid($id)
    {
        return Member::find($id);
    }

    public function postmember(Request $request)
    {
        return Member::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $task = Member::findOrFail($id);
        $task->update($request->all());
        return $task;
    }

    public function delete(Request $request, $id)
    {
        $task = Member::findOrFail($id);
        $task->delete();
        return 204;
    }

    public function testpost()
    {
        return response(['created'=>true],201);
    }
}
