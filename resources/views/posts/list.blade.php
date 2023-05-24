<x-app>
    <a href="{{route('posts.create')}}" type="button" class="btn btn-primary mb-4">Create</a>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($posts as $post)
            <tr>
                <th scope="row">{{$loop->iteration}}</th>
                <td>{{$post->title}}</td>
                <td>{{$post->status}}</td>
                <td>
                    <div class="d-flex">
                        <a href="{{route('posts.show', ['post' => $post])}}" type="button" class="btn btn-sm btn-primary me-2">View</a>
                        <a href="{{route('posts.edit', ['post' => $post])}}" type="button" class="btn btn-sm btn-info me-2">Edit</a>

                        <form action="{{route('posts.destroy', ['post' => $post])}}" method="POST">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn btn-sm btn-danger me-2">Delete</button>
                        </form>
                    </div>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</x-app>
