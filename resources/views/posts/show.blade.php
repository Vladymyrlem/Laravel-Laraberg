<x-app>
    <a href="{{route('posts.index')}}" type="button" class="btn btn-light mb-4 me-2">Back</a>
    <a href="{{route('posts.edit', ['post' => $post])}}" type="button" class="btn btn-secondary mb-4 me-2">Edit</a>

    <h1>{{$post->title}}</h1>

    <hr>

    {!! $post->render('content') !!}

</x-app>
