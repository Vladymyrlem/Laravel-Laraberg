<x-app>
    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="https://raw.githubusercontent.com/VanOns/laraberg/main/logo-text.svg" alt="" width="72" height="57">
        <h1 class="display-5 fw-bold">Laraberg Demo</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Laraberg brings the power of wordpress guttenber to laravel.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="{{route('posts.index')}}" class="btn btn-primary btn-lg px-4 gap-3">View Posts Again</a>
            <a href="{{route('posts.create')}}" class="btn btn-outline-secondary btn-lg px-4">Create Post Again</a>
          </div>
        </div>
      </div>
</x-app>
