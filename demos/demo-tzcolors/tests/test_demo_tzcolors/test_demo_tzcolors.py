from unittest import IsolatedAsyncioTestCase

import demo_tzcolors


class ExampleTest(IsolatedAsyncioTestCase):
    async def test_example(self):
        assert demo_tzcolors