<x-app>
    <a href="{{route('posts.index')}}" type="button" class="btn btn-light mb-4">Back</a>

    <form action="{{ isset($post) ? route('posts.update', ['post' => $post]) : route('posts.store') }}" method="POST">
        @method(isset($post) ? 'PUT' : 'POST')
        @csrf

        <div class="mb-3">
            <label for="post_title" class="form-label">Title</label>
            <input name="title" type="text" class="form-control" id="post_title" value="{{isset($post) ? $post->title : old('title') }}">
            @error('title')
                <div id="title_help" class="text-danger form-text">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label for="post_slug" class="form-label">Slug</label>
            <input name="slug" type="text" class="form-control" id="post_slug" value="{{isset($post) ? $post->slug : old('slug') }}">
            @error('slug')
                <div id="slug_help" class="text-danger form-text">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label for="post_content" class="form-label">Content</label>
            <textarea class="form-control" name="content" id="post_content" cols="30" rows="10">
                {{isset($post) ? $post->content : old('content') }}
            </textarea>
            @error('content')
                <div id="content_help" class="text-danger form-text">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label for="post_status" class="form-label">Status</label>
            <select name="status" class="form-select" id="post_status">
                <option selected>Select Status</option>
                <option {{(isset($post) && $post->status == 'draft') || (old('status') == 'draft') ? 'selected' : '' }} value="draft">Draft</option>
                <option {{(isset($post) && $post->status == 'publish') || (old('status') == 'publish') ? 'selected' : '' }} value="publish">Publish</option>
                <option {{(isset($post) && $post->status == 'trash') || (old('status') == 'trash') ? 'selected' : '' }} value="trash">Trash</option>
            </select>
            @error('status')
                <div id="status_help" class="text-danger form-text">{{ $message }}</div>
            @enderror
        </div>

        <button type="submit" class="btn btn-primary">{{isset($post) ? 'Save' : 'Create'}}</button>
    </form>
</x-app>
